import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ChartsContainer from "./ChartsContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ChartsContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
