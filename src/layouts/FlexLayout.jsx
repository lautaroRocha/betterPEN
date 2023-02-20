import Split from 'react-split'
import { CssEditor, HtmlEditor, JsEditor, Result} from "../components"

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
