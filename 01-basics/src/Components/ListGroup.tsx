const ListGroup = () => {
  //! Typescript Syntax For Declaring Arrays
  const cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"];
  return (
    //! Use Fragments When You Are Using Multiple Elements (<> Elements </>)
    //! You Can Also Use Div But It Will Add Extra Div In Your DOM
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* Dynamic Rendering ListGroup */}
        {cities.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
