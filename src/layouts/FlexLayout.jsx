import React from 'react';
import Split from 'react-split'
import { CssEditor, HtmlEditor, JsEditor, Result} from "../components"

const EditorsColumn = () =>{
    <Split
        className="split-editors"
        direction="vertical"
          >
            <HtmlEditor/>            
            <CssEditor/>
            <JsEditor/>
    </Split>
}

const FlexLayout = () => {
    return (
        <Split
            className="split content"
            gutterAlign="end"
        >
                <Split
                    className="split-editors"
                    direction="vertical"
                    >
                        <HtmlEditor/>            
                        <CssEditor/>
                        <JsEditor/>
                </Split>            
                <Result />
        </Split>
    );
}

export default FlexLayout;
