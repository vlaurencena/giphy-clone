import React from "react";
import { Route } from "wouter";
//pages
import Search from "./pages/Search";
import Home from "./pages/Home";
//components
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

const App = () => {

  return (
    <>
      <Header />
      <SearchBar />
      <Route
        component={Search}
        path="/search/:query"
      />
      <Route
        component={Home}
        path="/"
      />
    </>
  )
}

export default App;