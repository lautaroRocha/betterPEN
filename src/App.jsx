import { Header, EditorLayout } from "./components"
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
