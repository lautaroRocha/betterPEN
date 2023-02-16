import {useSelector} from 'react-redux'
import { useEffect } from 'react'

export default function useEncodeCode(){
    const {html, css, js} = useSelector((state)=>state.code)

    useEffect(()=>{
        let encodedCode = `${window.btoa(html)}|${window.btoa(css)}|${window.btoa(js)}`
        window.history.replaceState('', '', encodedCode)
    }, [html, css, js])
}