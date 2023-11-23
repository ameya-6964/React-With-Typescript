import { MouseEvent } from "react";

const ListGroup = () => {
  //! Typescript Syntax For Declaring Arrays
  let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"];

  //! Event Handlers
  const clickHandler = (item: string, index: number, e: MouseEvent) => {
    console.log("Clicked", item, index);
    console.log(e);
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
            className="list-group-item"
            key={city}
            onClick={(e) => clickHandler(city, index, e)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
