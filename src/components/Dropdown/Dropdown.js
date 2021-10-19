import React, { useState, useRef, useEffect } from "react";

import classNames from "classnames";
import "./Dropdown.scss";

const Dropdown = ({ label, options, prompt, value, onChange }) => {
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
    <div className='dropdown'>
      <div className='control'>
        <div className='selectedValue'>
          <input
            className='dropdownInput'
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
          />
        </div>
        <div className={classNames('arrow', { 'open': open })}/>
      </div>
      <div className={classNames('options', { 'open': open })}>
        {filter(options).map((option) => (
          <div
            key={option._id}
            className={classNames('option', value === option ? 'selected': null)}
            onClick={(e) => selectOption(e, option)}
            onTouchEnd={(e) => selectOption(e, option)}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
