import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";
import clsx from "clsx";

const SubItem = (item) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected((selected) => !selected);
  };

  let list;
  if (item?.children) {
    list = item.children.map((subitem) => SubItem(subitem));
    return (
      <>
        <li className={clsx("subitems", { selected })} onClick={handleSelected}>
          {item.name}
          <FontAwesomeIcon icon={selected ? faCaretUp : faCaretDown} />
        </li>
        {selected && <ul>{list}</ul>}
      </>
    );
  } else {
    return (
      <li>
        <div>
          {item.icon && <FontAwesomeIcon icon={item.icon} />}
          {item.name}
        </div>
      </li>
    );
  }
};

export const Sidebar = ({ menu }) => {
  return <ul className="sidebar">{menu.map((item) => SubItem(item))}</ul>;
};
