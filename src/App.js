import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "./App.css";
import Header from "./Layouts/Header";
import Home from "./Layouts/Home";
import SearchResults from "./Layouts/SearchResults";
import Access from "./Layouts/Access";
import ErrorPage from "./Layouts/ErrorPage";
import Footer from "./Layouts/Footer";

const App = () => {
  const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState({});

  const getSearchResults = async (input) => {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=:${input}`
    );

    if (response.data) {
      setSearchResults(response.data);
    }
  };

  return (
    <div className="App">
      <Header
        input={input}
        setInput={setInput}
        getSearchResults={getSearchResults}
      />
      <SearchWrapper>
        <SearchResults searchResults={searchResults} />
      </SearchWrapper>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/access" element={<Access />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
