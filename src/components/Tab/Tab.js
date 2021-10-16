import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import s from "../Tab/Tab.module.scss";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

   
    return (
      <li className={classNames(s.tabListItem, activeTab === label ? [s.tabListActive] : null)} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default Tab;
