const ListGroup = () => {
  //! Typescript Syntax For Declaring Arrays
  let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"];
  cities = [];
  const noItemsMessage = (
    <h1 className="text-muted text-center my-4"> No Items Found</h1>
  );

  return (
    //! Use Fragments When You Are Using Multiple Elements (<> Elements </>)
    //! You Can Also Use Div But It Will Add Extra Div In Your DOM
    <>
      <h1>Cities</h1>
      {cities.length === 0 ? (
        noItemsMessage
      ) : (
        <ul className="list-group">
          {/* Dynamic Rendering ListGroup */}
          {cities.map((city) => (
            <li key={city} className="list-group-item">
              {city}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
