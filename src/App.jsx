import { Header} from "./components"
import {Toaster} from 'react-hot-toast'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage, EditorPage, ExplorePage} from './pages'
import useResetCode from "./redux/useResetCode"

function App() {

  useResetCode()

  return (
    <>
      <Toaster  position="bottom-right"
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
        <Route path="/explore" element={<ExplorePage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App
