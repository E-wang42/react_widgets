import Accordion from "./components/Accordion";
import WikiSearch from "./components/WikiSearch";
import { useState } from "react";
import DropDown from "./components/DropDown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript library",
  },
  {
    title: "Why use React?",
    content: "React is cool",
  },
  {
    title: "is React used in Web3?",
    content: "Yes",
  },
];

const options = [
  {
    label: "The Color Orange",
    value: "orangered",
  },
  {
    label: "The Color Mint",
    value: "mint",
  },
  {
    label: "The Color Cyan",
    value: "cyan",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <WikiSearch /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <DropDown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
      {/* <Accordion items={items} /> */}
    </div>
  );
}

export default App;
