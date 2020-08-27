import React, { useState, useEffect } from "react";
import onClickOutside from "react-onclickoutside";

function CategoryComponent({ title, multiSelect = false, onChange }) {
  const category = [
    {
      id: 1,
      value: "Arts & Entertainment",
    },
    {
      id: 2,
      value: "Event",
    },
    {
      id: 3,
      value: "Food",
    },
    {
      id: 4,
      value: "Nightlife Spot",
    },
    {
      id: 5,
      value: "Outdoors & Recreation",
    },
    {
      id: 6,
      value: "Professional & Other Places",
    },
    {
      id: 7,
      value: "Shop & Service",
    },
    {
      id: 8,
      value: "Travel & Transport",
    },
  ];
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => {
    setOpen(!open);
  };

  CategoryComponent.handleClickOutside = () => setOpen(false);
  useEffect(() => {
    setSelection(selection);
    onChange(selection);
  }, [selection]);
  function dropdownHandler(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionRemoval = selection;
      selectionRemoval = selectionRemoval.filter(
        (current) => current.id !== item.id
      );
      console.log(selectionRemoval);
      setSelection([...selectionRemoval]);
    }
  }
  function isItemSelected(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }
  return (
    <div className="wrapper">
      <div
        tabIndex={0}
        className="select-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="header-title">
          <p className="header-title--bold">{title}</p>
        </div>
      </div>
      {open && (
        <ul className="select-list">
          {category.map((item) => (
            <li className="list-item" key={item.id}>
              <button type="button" onClick={() => dropdownHandler(item)}>
                <span>{item.value}</span>
                <span>{isItemSelected(item) && "Selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
const clickoutsideConfig = {
  handleClickOutside: () => CategoryComponent.handleClickOutside,
};
export default onClickOutside(CategoryComponent, clickoutsideConfig);
// <select className="category">
//       <option defaultValue> Please select a category</option>
//       <option value="arts">Arts & Entertainment</option>
//       <option value="event">Event</option>
//       <option value="food">Food</option>
//       <option value="nightlife">Nightlife Spot</option>
//       <option value="outdoors">Outdoors & Recreation</option>
//       <option value="professional">Professional & Other Places</option>
//       <option value="ss">Shop & Service</option>
//       <option value="tt">Travel & Transport</option>
//     </select>
