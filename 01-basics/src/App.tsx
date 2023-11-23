import ListGroup from "./Components/ListGroup";

const App = () => {
  let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"];
  let colors: string[] = ["Red", "Green", "Orange", "Blue", "Yellow"];
  let animals: string[] = ["Cat", "Dog", "Tiger", "Lion"];
  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      <ListGroup items={colors} heading="Colors" />
      <ListGroup items={animals} heading="Animals" />
    </div>
  );
};

export default App;
