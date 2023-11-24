import { useState } from "react";
import styles from "./styles/ListGroup.module.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  //! Typescript Syntax For Declaring Arrays
  /*   let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"]; */

  //! Hooks
  let [selectedIndex, setSelectedIndex] = useState(-1);

  //! Event Handlers
  const selectHandler = (index: number) => {
    setSelectedIndex(index);
  };
  const noItemsFoundMessage = (
    <h1 className="text-muted text-center my-4"> No Items Found</h1>
  );

  return (
    //! Use Fragments When You Are Using Multiple Elements (<> Elements </>)
    //! You Can Also Use Div But It Will Add Extra Div In Your DOM
    <>
      <h1 className="bg-success p-4 text-white my-4 text-center">{heading}</h1>

      {/* Short Circuiting  */}
      {items.length === 0 && noItemsFoundMessage}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {/* Dynamic Rendering ListGroup */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item list-group-item-info"
            }
            key={item}
            onClick={() => {
              selectHandler(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
