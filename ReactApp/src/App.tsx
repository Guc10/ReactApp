import Header from "./components/Header";

function App() {
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

  return (
    <div>
      <Header
        items={TestList}
        heading="Numbers"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
