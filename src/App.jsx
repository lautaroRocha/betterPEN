import { CssEditor, HtmlEditor, JsEditor, Result, Header } from "./components"
import React, {useState, useEffect} from "react"
import Split from 'react-split-grid'
import { CodeContext } from "./context/CodeContext"


function App() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  const code = {
    html : html,
    css : css,
    js : js
  }

  return (
    <CodeContext.Provider value={code}>
      <Header />
      <Split
        render={({
              getGridProps,
              getGutterProps,
          }) => (
              <div className="grid" {...getGridProps()}>
                  <HtmlEditor setHtml={setHtml}/>            
                  <div className="gutter-col gutter-col-1" {...getGutterProps('column', 1)} />
                  <CssEditor setCss={setCss}/>
                  <JsEditor setJs={setJs}/>
                  <div className="gutter-row gutter-row-1" {...getGutterProps('row', 1)} />
                  <Result/>
              </div>
    )}/>
    </CodeContext.Provider>
  )
}

export default App
