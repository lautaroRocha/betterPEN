import React from 'react';

const JsEditor = ({setJs}) => {
    return (
        <textarea onChange={(e) => setJs(e.target.value)}>
          
        </textarea>
    );
}

export default JsEditor;
