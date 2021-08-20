import { useEffect } from "react";
import CountryList from "./components/country/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { keepTheme } from "./utils/theme";

function App() {

  useEffect(() => {
    keepTheme();
  })


  return (
    <div className="app">
      <Header />
      <SearchBar />
      <CountryList />
    </div>
  );
}

export default App;
