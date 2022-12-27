import React from "react";
import ReactDOM from "react-dom/client";
import BoardView from "./components/BoardView";
import "./main.scss";
import "./styles.scss";

const App = () => {
  return <BoardView />;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
