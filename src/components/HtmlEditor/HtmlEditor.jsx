import React, {memo} from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";
import {Spinner} from '../../components'
import {useDispatch } from 'react-redux'
import  {setHtml}  from '../../redux/codeSlice'

const HtmlEditor = memo(function HtmlEditor(){

    const dispatch = useDispatch()

    const handleEditorChange = (e) => {
        dispatch(setHtml(e))
    }

    return (
        <div className='editor' tabIndex={0}>
            {Icons.html}
            <Editor defaultLanguage='html' onChange={handleEditorChange}  theme="vs-dark" loading={<Spinner />}/>
        </div>
    );
})

export default HtmlEditor;
