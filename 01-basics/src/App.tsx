import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

const App = () => {
  let cities: string[] = ["Maharashtra", "Goa", "Lucknow", "Delhi", "Punjab"];
  let colors: string[] = ["Red", "Green", "Orange", "Blue", "Yellow"];
  let animals: string[] = ["Cat", "Dog", "Tiger", "Lion"];

  //!Hooks
  const [alert, setAlert] = useState(false);

  //! Handlers
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {alert && (
        <Alert
          onClose={() => {
            setAlert(!alert);
          }}
        >
          My Alert
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlert(!alert);
        }}
        color="secondary"
      >
        Hello World
      </Button>
    </>
  );
};

export default App;
