import { useState } from "react";

const ListGroup = () => {
  //! Typescript Syntax For Declaring Arrays
  let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"];

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
      <h1>Cities</h1>
      {/* Short Circuiting  */}
      {cities.length === 0 && noItemsFoundMessage}
      <ul className="list-group">
        {/* Dynamic Rendering ListGroup */}
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              selectHandler(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
