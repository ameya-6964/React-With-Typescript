import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

const App = () => {
  let colors: string[] = ["Red", "Green", "Orange", "Blue", "Yellow"];
  //! Handlers
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Button> My Button </Button>
    </>
  );
};

export default App;
