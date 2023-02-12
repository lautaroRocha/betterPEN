import React from 'react';
import * as Icons from '../../assets/icons'

const CssEditor = ({setCss}) => {
    return (
        <div className='editor'>
            {Icons.css}
            <textarea onChange={(e) => setCss(e.target.value)}/>
        </div>
    );
}

export default CssEditor;
