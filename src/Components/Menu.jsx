import React from "react";

const Menu = ({ activeIndex, setActiveIndex }) => {
  const menuItems = [
    "React",
    "JSX & Props",
    "Related Resources",
    "Vanilla JavaScript"
  ];
  return (
    <menu>
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={activeIndex === index ? "active" : ""}
          onClick={() => setActiveIndex(index)}
        >
          {item}
        </button>
      ))}
    </menu>
  );
};
export default Menu;

{
  /* <menu>
          <button
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => setActiveIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => setActiveIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => setActiveIndex(2)}
          >
            Related Resources
          </button>
        </menu> */
}
