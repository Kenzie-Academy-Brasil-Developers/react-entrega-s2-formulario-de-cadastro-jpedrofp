import "./App.css";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="App-header">
      <Routes />
      <GlobalStyles></GlobalStyles>{" "}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
