import Split from 'react-split'
import { CssEditor, HtmlEditor, JsEditor, Result} from "../../components"

const ReverseFlexLayout = () => {
    return (
        <Split
            className="split content"
            gutterAlign="end"
        >
            <Result />
            <Split
                className="split-editors"
                direction="vertical"
                >
                    <HtmlEditor/>            
                    <CssEditor/>
                    <JsEditor/>
            </Split>            
        </Split>
    );
}

export default ReverseFlexLayout;
