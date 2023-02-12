import React from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";


const CssEditor = ({setCss}) => {

    const handleEditorChange = (e) => {
        setCss(e)
    }
    return (
        <div className='editor'>
            {Icons.css}
            <Editor defaultLanguage='css' defaultValue="//CSS code" onChange={handleEditorChange}         theme="vs-dark"
/>
        </div>
    );
}

export default CssEditor;
