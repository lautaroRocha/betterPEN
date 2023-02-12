import React from 'react';

const CssEditor = ({setCss}) => {
    return (
        <textarea onChange={(e) => setCss(e.target.value)}
        >
            
        </textarea>
    );
}

export default CssEditor;
