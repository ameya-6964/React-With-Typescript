import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";

const App = () => {
  let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"];
  let colors: string[] = ["Red", "Green", "Orange", "Blue", "Yellow"];
  let animals: string[] = ["Cat", "Dog", "Tiger", "Lion"];

  //! Handlers
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <Alert>
        Hello World From <span className="text-danger">I Am Span</span> 1
      </Alert>
      <Alert>
        Hello I Am <span className="text-danger">Children</span> Component 2
      </Alert>
      <div>
        <ListGroup
          items={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <ListGroup
          items={colors}
          heading="Colors"
          onSelectItem={handleSelectItem}
        />
        <ListGroup
          items={animals}
          heading="Animals"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
};

export default App;
