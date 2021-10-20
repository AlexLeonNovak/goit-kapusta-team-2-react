import { useState } from "react";
// import classNames from 'classnames';
import PropTypes from "prop-types";

// import s from "../Tabs/Tabs.module.scss";

export const Tabs = ({ items, onChange }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const tabHandleClick = (index) => {
    setActiveTabIdx(index);
    onChange(items[index]);
  };

  return (
    <div>
      <ul>
        {items.map(({ label, value }, index) => (
          <li key={index} onClick={() => tabHandleClick(index)}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};

export default Tabs;
