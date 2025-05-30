import { Scenario } from "./components/Scenario";

const App = () => {
  const onClose = () => {
    console.log("Modal closed");
  };
  return <Scenario onClose={onClose} />;
};

export default App;
