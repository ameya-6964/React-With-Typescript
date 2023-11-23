import Alert from "./Components/Alert";
import Button from "./Components/Button";
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
      <Button
        onClick={() => {
          console.log(`Clicked`);
        }}
        color="secondary"
      >
        Hello World
      </Button>
      <Button
        onClick={() => {
          console.log(`Clicked`);
        }}
        color="warning"
      >
        Hello World
      </Button>
      <Button
        onClick={() => {
          console.log(`Clicked`);
        }}
        color="success"
      >
        Hello World
      </Button>
      <Button
        onClick={() => {
          console.log(`Clicked`);
        }}
        color="danger"
      >
        Hello World
      </Button>
      <Button
        onClick={() => {
          console.log(`Clicked`);
        }}
      >
        I Dont Have Color Prop Passed
      </Button>
    </>
  );
};

export default App;
