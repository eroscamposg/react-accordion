import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={ faqs } />
    </div>
  );
}

function Accordion({data}) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <Item item={faq} index={index} key={index}/>
      ))}
    </div>
  )
}

function Item({ item, index }) {
  const [open, setOpen] = useState(false)

  const paddedIndex = String(index+1).padStart(2, '0')


  if (open) {
    return (
      <>
        <div className={`item ${open && 'open'}`} onClick={() => setOpen(!open)}>
          <span className="number">
            { paddedIndex }
          </span>
          <span className="title">{item.title}</span>
          <span className="icon"> - </span>
          <div className="content-box">
            <ul>{ item.text }</ul>
          </div>
        </div>
      </>
    )
  } else {
    return (
    <div className="item" onClick={() => setOpen(!open)}>
      <span className="number">
        { paddedIndex }
      </span>
      <span className="title">{item.title}</span>
      <span className="icon"> + </span>
    </div>
  )}
}
