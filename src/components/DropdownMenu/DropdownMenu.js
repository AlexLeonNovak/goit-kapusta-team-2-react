import React, { useState } from "react";

import Dropdown from "./Dropdown";

import data from "./categories.json";

const DropdownMenu = () => {
  const [value, setValue] = useState(null);

  const [textValue, setTextValue] = useState(null);

  const handleChange = (e) => setTextValue(e.target.value);

  return (
    <div>
      <div>
        <input type="text" value={textValue} onChange={handleChange} />

        <div style={{ width: 200 }}>
          <Dropdown
            id="id"
            label="name"
            options={data}
            prompt="Категория товара"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>

        <input
          type="number"
          max="100000"
          min="1"
          placeholder="00.00"
          pattern="\d+(.\d{2})?"
        />
      </div>
      <div>
        <button type="submit">ВВОД</button>
        <button type="button">ОЧИСТИТЬ</button>
      </div>
    </div>
  );
};

export default DropdownMenu;
