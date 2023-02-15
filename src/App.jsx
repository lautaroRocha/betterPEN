import { Header } from "./components"
import React from "react"
import {useSelector } from 'react-redux'
import GridLayout from "./layouts/GridLayout"
import FlexLayout from "./layouts/FlexLayout"



function App() {

  const layout = useSelector((state) => state.layout)

  return (
    <>
      <Header/>
      {layout.flexLayout ? <FlexLayout /> : <GridLayout />}
    </>
  
  )
}

export default App
