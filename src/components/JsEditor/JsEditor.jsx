import React, {memo} from 'react';
import * as Icons from '../../assets/icons'
import Editor from "@monaco-editor/react";
import {Spinner} from '../../components'


const JsEditor = memo(function JsEditor({setJs}){

    const handleEditorChange = (e) => {
        setJs(e)
    }

    return (
        <div className='editor'>
            {Icons.js}
            <Editor defaultLanguage='javascript' onChange={handleEditorChange} theme="vs-dark" loading={<Spinner />}
/>
        </div>
    );
})

export default JsEditor;
