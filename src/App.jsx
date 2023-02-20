import { Header, EditorLayout, HomeLayout} from "./components"
import {Toaster} from 'react-hot-toast'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

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
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/editor/:code" element={<EditorLayout />}/>
      </Routes>
      
      </BrowserRouter>
    </>
  
  )
}

export default App
