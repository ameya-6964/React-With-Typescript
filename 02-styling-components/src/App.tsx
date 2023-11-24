import ListGroup from "./Components/ListGroup";

const App = () => {
  let colors: string[] = ["Red", "Green", "Orange", "Blue", "Yellow"];
  //! Handlers
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={colors}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
};

export default App;
