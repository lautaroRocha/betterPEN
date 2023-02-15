import React, {memo} from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";
import {Spinner} from '../../components'


const CssEditor = memo(function CssEditor({setCss}){

    const handleEditorChange = (e) => {
        setCss(e)
    }

    return (
        <div className='editor'>
            {Icons.css}
            <Editor defaultLanguage='css'onChange={handleEditorChange} theme="vs-dark" loading={<Spinner />}/>
        </div>
    );
})

export default CssEditor;
