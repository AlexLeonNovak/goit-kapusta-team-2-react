import React, { useState, useRef, useEffect } from "react";


import classNames from 'classnames';
import s from '../TransactionsForm/Dropdown.module.scss'


const Dropdown = ({ id, label, options, prompt, value, onChange }) => {
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

  function selectOption(option) {
    setQuery("");
    onChange(option);
    setOpen(false);
  }

  return (
    <div className={ s.dropdown}>
      <div className={ s.control}>
        <div className={s.selectedValue}>
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
          />
        </div>
        <div className={classNames(s.arrow,{[s.open]: open} )}></div>
      </div>
      <div className={classNames(s.options,{[s.open]: open} )}>
        {filter(options).map((option) => (
          <div
            key={option[id]}
            className={classNames(s.option, value === option, {[s.selected] : null})}
            onClick={() => selectOption(option)}
            onTouchEnd={() => selectOption(option)}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
