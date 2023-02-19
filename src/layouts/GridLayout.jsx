import React from 'react';
import Split from 'react-split-grid'
import { CssEditor, HtmlEditor, JsEditor, Result} from "../components"


const GridLayout = () => {
    return (
        <Split
        render={({
              getGridProps,
              getGutterProps,
          }) => (
              <div className="grid content" {...getGridProps()}>
                  <HtmlEditor/>            
                  <div className="gutter-col gutter-col-1" {...getGutterProps('column', 1)} />
                  <CssEditor/>
                  <JsEditor/>
                  <div className="gutter-row gutter-row-1" {...getGutterProps('row', 1)} />
                  <Result/>
              </div>
    )}/>
    );
}

export default GridLayout;
 
 
 