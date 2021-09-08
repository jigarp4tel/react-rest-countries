import { useEffect, useState } from "react";
import CountryList from "./components/country/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { keepTheme } from "./utils/theme";
import { Route, Switch } from 'react-router-dom';
import CountryDetails from "./components/country/CountryDetails";

function App() {

  useEffect(() => {
    keepTheme();
  })

  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    getAllCountries();
  }, [])


  const getAllCountries = async () => {
    let response = await fetch('https://restcountries.eu/rest/v2/all')
    let data = await response.json()
    setCountryList(data)
  }

  const searchCountry = async (country) => {
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    let data = await response.json()
    setCountryList(data)
  }

  const filterByRegion = async (region) => {


    if (region === 'All') {
      getAllCountries();
    } else {
      let response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      let data = await response.json()
      setCountryList(data)
    }
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
      <Switch>
        <Route exact path="/">
          <SearchBar handleSearch={handleSearch} handleFilter={filterByRegion} />
          {countryList.length ? <CountryList countryList={countryList} /> : null}
        </Route>
        <Route path="/country/:name">
          <CountryDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
