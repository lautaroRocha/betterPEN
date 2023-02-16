import { useDispatch } from "react-redux"
import {setHtml, setCss, setJs} from '../redux/codeSlice'

export default function useRecoverCode(){

    const dispatch = useDispatch()
    const cryptedCode = window.location.pathname.substring(1)

    if(cryptedCode !== ''){
        const keepedCode =  Array.from(window.location.pathname.split('%7C'))
        let recoveredCode = {
            html : window.atob(keepedCode[0].substring(1)),
            css : window.atob(keepedCode[1]),
            js : window.atob(keepedCode[2])
        }
        dispatch(setHtml(recoveredCode.html))
        dispatch(setCss(recoveredCode.css))
        dispatch(setJs(recoveredCode.js))


    }

}
