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
  const [curOpen, setCurOpen] = useState(null)
  
  function handleOpenItem(itemIndex) {
    setCurOpen(itemIndex === curOpen ? null : itemIndex )
  }

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <Item item={faq} index={index} key={index} curOpen={curOpen} onOpenItem={handleOpenItem} />
      ))}
    </div>
  )
}

function Item({ item, index, curOpen, onOpenItem }) {
  const paddedIndex = String(index + 1).padStart(2, '0')
  const isOpen = curOpen === index

  return (
    <>
      <div className={`item ${isOpen && 'open'}`} onClick={() => onOpenItem(index)}>
        <span className="number">
          { paddedIndex }
        </span>
        <span className="title">{item.title}</span>
        <span className="icon"> { isOpen ? '-' : '+' } </span>
        {isOpen &&
          <div className="content-box">
            <ul>{ item.text }</ul>
          </div>
        }
      </div>
    </>
  )
}
