import React, {memo} from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";
import {Spinner} from '../../components'
import {useDispatch, useSelector } from 'react-redux'
import { setJs } from '../../redux/codeSlice';


const JsEditor = memo(function JsEditor(){

    const dispatch = useDispatch()

    const handleEditorChange = (e) => {
        dispatch(setJs(e))
    }

    const jsCode = useSelector((state)=>state.code.js)

    return (
        <div className='editor'>
            {Icons.js}
            <Editor defaultLanguage='javascript' onChange={handleEditorChange} theme="vs-dark" loading={<Spinner />} defaultValue={jsCode}/>
        </div>
    );
})

export default JsEditor;
