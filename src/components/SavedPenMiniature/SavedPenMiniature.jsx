import {useDispatch} from 'react-redux'
import {setCss, setHtml, setJs, setTitle, setAuthor} from '../../redux/codeSlice'
import {useNavigate} from 'react-router-dom'

const SavedPenMiniature = ( {pen} ) => {

    const {title, author, html, css, js} = pen

    const preview = `<!DOCTYPE html>
    <html><head><style>
    *{
      cursor : pointer;
    }
    body{
        transform:  scale(.8) translateY(-11rem);
        overflow: clip;
    }
   
    ${css}
    </style>
    </head>
    <body>
    ${html}
    </body>
    <script>
    ${js}
    </script>
    </html>`
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setCodeToPen = () => {
      dispatch(setCss(css))
      dispatch(setHtml(html))
      dispatch(setJs(js))
      dispatch(setTitle(title))
      dispatch(setAuthor(author))
    }

    const navigateToEditor = () => navigate('/editor/'+`${window.btoa(html)}|${window.btoa(css)}|${window.btoa(js)}`)


    const goToEditor = () => {
      setCodeToPen();
      setTimeout(navigateToEditor(), 3500)
    }

  return (
    <div className="saved-pen-min" onClick={goToEditor}>
        <iframe srcDoc={preview}  onClick={goToEditor}/>
        <div>
          <h2>{title}</h2>
          <h3>by {author}</h3>
        </div>
        <div className="shadow"/>
    </div>
  )
}

export default SavedPenMiniature