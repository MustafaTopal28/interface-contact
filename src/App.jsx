import React from "react";
import Contact from "./components/Contact/Contact";
const status = true;
function App() {
  return (
    <div className="App">
      <Contact
        name="Dylan Chavez"
        avatar="https://randomuser.me/api/portraits/men/58.jpg"
        online={status}
        text
      />
      <Contact
        name="Eli Harvey"
        avatar="https://randomuser.me/api/portraits/men/71.jpg"
      />
      <Contact
        name="Wilma Rhodes"
        avatar="https://randomuser.me/api/portraits/women/2.jpg"
        online={status}
        text
      />
    </div>
  );
}

export default App;
