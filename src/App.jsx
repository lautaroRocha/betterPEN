import { Header, EditorLayout } from "./components"
import {useSelector } from 'react-redux'
import useRecoverCode from "./hooks/useRecoverCode"

function App() {

  useRecoverCode()

  return (
    <>
      <Header/>
      <EditorLayout />
    </>
  
  )
}

export default App
