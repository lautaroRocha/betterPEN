import { useDispatch } from "react-redux"
import {setHtml, setCss, setJs} from '../redux/codeSlice'
import {useParams} from 'react-router-dom'

export default function useRecoverCode(){

    const dispatch = useDispatch()
    const {code} = useParams();

    if(code){
        const keepedCode =  Array.from(code.split('%7C'))
        let recoveredCode = {
            html : window.atob(keepedCode[0]),
            css : window.atob(keepedCode[1]),
            js : window.atob(keepedCode[2])
        }
        dispatch(setHtml(recoveredCode.html))
        dispatch(setCss(recoveredCode.css))
        dispatch(setJs(recoveredCode.js))
    }
}
