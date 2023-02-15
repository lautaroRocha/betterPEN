import { CssEditor, HtmlEditor, JsEditor, Result, Header } from "./components"
import React from "react"
import Split from 'react-split-grid'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  
  return (
    <Provider store={store}>
      <Header />
      <Split
        render={({
              getGridProps,
              getGutterProps,
          }) => (
              <div className="grid" {...getGridProps()}>
                  <HtmlEditor/>            
                  <div className="gutter-col gutter-col-1" {...getGutterProps('column', 1)} />
                  <CssEditor/>
                  <JsEditor/>
                  <div className="gutter-row gutter-row-1" {...getGutterProps('row', 1)} />
                  <Result/>
              </div>
    )}/>
    </Provider>
  )
}

export default App
