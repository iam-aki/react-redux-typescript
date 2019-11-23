import * as React from "react";
import "./App.css";
import StoreRoutes from "./Routes/StoreRoutes";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StoreRoutes />
      </header>
    </div>
  );
};

export default App;
