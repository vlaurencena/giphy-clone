import React from "react"
import { Route } from "wouter"
//pages
import Search from "./pages/Search"
import Home from "./pages/Home"
import TrendingGifs from "./pages/TrendingGifs"
//components
import SearchBar from "./components/search_bar/SearchBar"
import Header from "./components/header/Header"

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
        component={TrendingGifs}
        path="/trending-gifs"
      />
      <Route
        component={Home}
        path="/"
      />
    </>
  )
}

export default App