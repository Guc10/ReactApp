//import Header from "./components/Header";
import Heading from "./components/Heading";
import MovingButton from "./components/MovingButton";
import { useState } from "react";

function App() {
  /*
  const TestList = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  <Header items={TestList} heading="Numbers" onSelectItem={handleSelectItem} />;
  */

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // @ts-ignore
    if (typeof window.deployParticles === "function") {
      // @ts-ignore
      window.deployParticles();
    }
  };

  return (
    <>
      <main>
        {!clicked ? (
          <>
            <Heading />
            <button onClick={handleClick}>YESSS !!!</button>
            <MovingButton />
          </>
        ) : (
          <h1>YAYY &lt;3 !!!</h1>
        )}
      </main>
    </>
  );
}

export default App;
