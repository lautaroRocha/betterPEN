import React from 'react';
import * as Icons from '../../assets/icons'

const HtmlEditor = ({setHtml}) => {
    return (
        <div className='editor' tabIndex={0}>
            {Icons.html}
            <textarea onChange={(e) => setHtml(e.target.value)}/>
        </div>
    );
}

export default HtmlEditor;
