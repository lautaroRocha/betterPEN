import { CssEditor, HtmlEditor, JsEditor, Result } from "./components"
import React, {useState} from "react"


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
    <>
    <HtmlEditor setHtml={setHtml}/>
    <CssEditor setCss={setCss}/>
    <JsEditor setJs={setJs}/>
    <Result code={code} />
    </>
  )
}

export default App
