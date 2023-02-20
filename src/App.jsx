import { Header, EditorLayout } from "./components"
import useRecoverCode from "./hooks/useRecoverCode"
import {Toaster} from 'react-hot-toast'


function App() {

  useRecoverCode()

  return (
    <>
      <Toaster  position="top-right"
            reverseOrder={false}
            toastOptions={{
              className: '',
              style: {
                background: 'hsl(0, 3%, 28%)',
                padding: '16px',
                color: 'rgb(236, 220, 47)',
                fontWeight: 'light'
              }}} />
      <Header/>
      <EditorLayout />
    </>
  
  )
}

export default App
