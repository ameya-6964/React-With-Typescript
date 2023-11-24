import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

const App = () => {
  //!Hooks
  const [alert, setAlert] = useState(false);

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
