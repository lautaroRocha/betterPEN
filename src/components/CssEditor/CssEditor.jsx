import React, {memo} from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";
import {Spinner} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import { setCss } from '../../redux/codeSlice';


const CssEditor = memo(function CssEditor(){

    const dispatch = useDispatch()
    const cssCode = useSelector((state)=>state.code.css)

    console.log('render css')


    const handleEditorChange = (e) => {
        dispatch(setCss(e))
    }


    return (
        <div className='editor'>
            {Icons.css}
            <Editor defaultLanguage='css'onChange={handleEditorChange} theme="vs-dark" loading={<Spinner />} defaultValue={cssCode}/>
        </div>
    );
})

export default CssEditor;
