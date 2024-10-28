import { useState } from "react";
import { puppyList } from "./data.js";
import "./path-to-css.css";

console.log("puppyList:", puppyList); // Add this before the App function

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);

  return (
    <div className="App">
      <h1>Puppy List</h1>
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;
