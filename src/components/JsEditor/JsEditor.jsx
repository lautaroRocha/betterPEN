import React from 'react';
import * as Icons from '../../assets/icons'

const JsEditor = ({setJs}) => {
    return (
        <div className='editor'>
            {Icons.js}
            <textarea onChange={(e) => setJs(e.target.value)}/>
        </div>
    );
}

export default JsEditor;
