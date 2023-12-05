import { useRef, useEffect } from "react";

function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  //After Render
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  });

  return (
    <div className="row">
      <div className="col-4">
        <label htmlFor="name">First Name</label>
        <input
          ref={nameRef}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>
      <div className="col-4">
        <label htmlFor="name">Last Name</label>
        <input
          ref={lastNameRef}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>
      <div className="col-4">
        <label htmlFor="number">Number</label>
        <input
          ref={numberRef}
          type="number"
          id="number"
          className="form-control"
        />
      </div>
    </div>
  );
}

export default App;
