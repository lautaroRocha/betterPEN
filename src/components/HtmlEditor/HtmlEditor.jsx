import React, {memo} from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import {Spinner} from '../../components'
import { loader } from "@monaco-editor/react";

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
