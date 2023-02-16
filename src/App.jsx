import { Header } from "./components"
import {useSelector } from 'react-redux'
import GridLayout from "./layouts/GridLayout"
import FlexLayout from "./layouts/FlexLayout"
import useRecoverCode from "./hooks/useRecoverCode"

function App() {

  useRecoverCode()
  const layout = useSelector((state) => state.layout)

  return (
    <>
      <Header/>
      {layout.flexLayout ? <FlexLayout /> : <GridLayout />}
    </>
  
  )
}

export default App
