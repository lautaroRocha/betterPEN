import React from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";


const HtmlEditor = ({setHtml}) => {

    const handleEditorChange = (e) => {
        setHtml(e)
    }

    return (
        <div className='editor' tabIndex={0}>
            <Editor defaultLanguage='html' defaultValue="<!--HTML code-->" onChange={handleEditorChange}  theme="vs-dark"/>
        </div>
    );
}

export default HtmlEditor;
