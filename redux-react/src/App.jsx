import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import CandyContainer from "./components/CandyContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CandyContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
