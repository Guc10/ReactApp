import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function Header({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Test1</h1>
      <h2>{heading}</h2>
      {items.map((item, index) => (
        <p
          className={
            selectedIndex === index
              ? "list-group-element active"
              : "list-group-element"
          }
          key={item}
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
          }}
        >
          {item}
        </p>
      ))}
    </>
  );
}

export default Header;
