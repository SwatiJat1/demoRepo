import React from "react";

const ThemeContext = React.createContext("light");
const Context = () => {
  return (
    <div>
      <ThemeContext.Provider value="red">
        <Child />
      </ThemeContext.Provider>
    </div>
  );
};

const Child = () => {
  return (
    <div>
      <Toolbar />
    </div>
  );
};
const Toolbar = () => {
  const contextType = ThemeContext;
  return (
    <div>
      <button style={{ backgroundColor: contextType }}>click here</button>
    </div>
  );
};

export default Context;
