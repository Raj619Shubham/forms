import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  const InputEvent = (event) => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={InputEvent}
        />
        <button onClick={onSubmit}>Click me 😎</button>
      </div>
    </>
  );
};

export default App;
