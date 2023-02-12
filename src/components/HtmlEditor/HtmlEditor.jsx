import React from 'react';

const HtmlEditor = ({setHtml}) => {
    return (
        <textarea onChange={(e) => setHtml(e.target.value)}>
        </textarea>
    );
}

export default HtmlEditor;
