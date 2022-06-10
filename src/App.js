import Accordion from "./components/Accordion";
import WikiSearch from "./components/WikiSearch";

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

function App() {
  return (
    <div>
      <WikiSearch />

      {/* <Accordion items={items} /> */}
    </div>
  );
}

export default App;
