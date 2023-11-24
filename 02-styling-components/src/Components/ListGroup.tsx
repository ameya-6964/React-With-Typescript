import { useState } from "react";
import "./styles/ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  background: yellow;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 10px 0;
  border: 1px solid red;
  background: ${({ active }) => (active ? "blue" : "null")};
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  //! Typescript Syntax For Declaring Arrays
  /*   let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"]; */

  //! Hooks
  let [selectedIndex, setSelectedIndex] = useState(0);

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
      <List>
        {/* Dynamic Rendering ListGroup */}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              selectHandler(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
