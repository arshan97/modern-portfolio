import { AnimatePresence } from "framer-motion"
import React from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import { ContactUs } from "./pages/ContactUs"
import MovieDetail from "./pages/MovieDetail"
import { OurWork } from "./pages/OurWork"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>

          <Route exact path="/work">
            <OurWork />
          </Route>

          <Route path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
