import { useEffect } from "react";
import Header from "./components/Header";
import { keepTheme } from "./utils/theme";

function App() {

  useEffect(() => {
    keepTheme();
  })


  return (
    <div className="app">

      <Header />

    </div>
  );
}

export default App;
