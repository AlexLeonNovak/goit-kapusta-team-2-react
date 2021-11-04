import React, { useState, useRef, useEffect } from "react";
import classNames from 'classnames';

import "./Dropdown.scss";

const Dropdown = ({ label, options, prompt, value, onChange, className }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    ["click", "touchend"].forEach((e) => {
      document.addEventListener(e, toggle);
    });
    return () =>
      ["click", "touchend"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  function toggle(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  }

  function selectOption(e, option) {
    e.preventDefault();
    setQuery("");
    onChange(option);
    setOpen(false);
  }

  return (
    <div className="dropdown">
        <input
          type="text"
          ref={ref}
          placeholder={value ? value[label] : prompt}
          value={displayValue()}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(null);
          }}
          onClick={toggle}
          onTouchEnd={toggle}
          className={className}
        />

      <span className={classNames('arrow', {open})} />

      <ul className={classNames({open})}>
        {filter(options).map((option) => (
          <li
            key={option._id}
            onClick={(e) => selectOption(e, option)}
            onTouchEnd={(e) => selectOption(e, option)}
          >
            {option[label]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
