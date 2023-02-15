import React, {memo} from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";
import {Spinner} from '../../components'

const HtmlEditor = memo(function HtmlEditor({setHtml}){

    const handleEditorChange = (e) => {
        setHtml(e)
    }


    return (
        <div className='editor' tabIndex={0}>
            {Icons.html}
            <Editor defaultLanguage='html' onChange={handleEditorChange}  theme="vs-dark" loading={<Spinner />}/>
        </div>
    );
})

export default HtmlEditor;
