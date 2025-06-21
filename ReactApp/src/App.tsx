import Header from "./components/Header";
import MovingButton from "./components/MovingButton";
import Logo from "./components/Logo";
import { useState } from "react";

function App() {
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
            <Header />
            <button onClick={handleClick}>YESSS !!!</button>
            <MovingButton />
          </>
        ) : (
          <h1>YAYY &lt;3 !!!</h1>
        )}
        <Logo />
      </main>
    </>
  );
}

export default App;
