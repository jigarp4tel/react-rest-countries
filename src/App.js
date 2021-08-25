import { useEffect, useState } from "react";
import CountryList from "./components/country/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { keepTheme } from "./utils/theme";

function App() {

  useEffect(() => {
    keepTheme();
  })

  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    getAllCountries();
  }, [])


  const getAllCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountryList(data))
  }

  const searchCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(data => setCountryList(data))
  }

  const filterByRegion = (region) => {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(res => res.json())
      .then(data => setCountryList(data))
  }

  const handleSearch = (country) => {

    if (country.length > 2) {
      searchCountry(country);
    }

    if (country === "") {
      getAllCountries();
    }

  }


  return (
    <div className="app">
      <Header />
      <SearchBar handleSearch={handleSearch} handleFilter={filterByRegion} />
      {countryList.length ? <CountryList countryList={countryList} /> : null}
    </div>
  );
}

export default App;
