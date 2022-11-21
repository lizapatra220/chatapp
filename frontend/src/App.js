import "./App.css";
// import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      {/* <Button colorScheme="blu
      e">Button</Button> */}
      <Route path="/" component={Home} exact />
      <Route path="/chat" component={Chat} />
    </div>
  );
}

export default App;
