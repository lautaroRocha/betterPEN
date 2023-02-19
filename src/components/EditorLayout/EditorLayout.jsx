import { useSelector } from "react-redux"
import {FlexLayout, GridLayout, ReverseFlexLayout}from "../../layouts"

const EditorLayout = () => {

    const layoutSelection = useSelector((state) => state.layout)
    let view 

    console.log(layoutSelection)

    switch(layoutSelection){
        case 'flex':
            view = <FlexLayout />
            break;
        case 'grid':
            view = <GridLayout />
            break;
        case 'reverse-flex':
            view = <ReverseFlexLayout />
            break
    }

    return <>{view}</>
}

export default EditorLayout