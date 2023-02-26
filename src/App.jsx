import { Header} from "./components"
import {Toaster} from 'react-hot-toast'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage, EditorPage} from './pages'
import { useSelector, useDispatch } from "react-redux"
import {resetCode} from './redux/codeSlice'

function App() {

  const dispatch = useDispatch() 

  const hasNavigatedAway = useSelector(
    (state) => state.navigation.hasNavigatedAway
  )
  
  if(hasNavigatedAway){
    dispatch(resetCode())
  }

  return (
    <>
      <Toaster  position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: 'hsl(0, 3%, 28%)',
                padding: '16px',
                color: 'rgb(236, 220, 47)',
                fontWeight: 'light'
              }}} />
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor/*" element={<EditorPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App
