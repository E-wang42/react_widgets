import Accordion from "./components/Accordion";

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
      <Accordion items={items} />
    </div>
  );
}

export default App;
