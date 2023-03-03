import { useSelector, useDispatch } from "react-redux"
import {FlexLayout, GridLayout, ReverseFlexLayout}from "../../layouts"
import { setHasNavigatedAway } from "../../redux/navigationSlice"
import { useEffect } from "react"

const EditorPage = () => {

    const layoutSelection = useSelector((state) => state.layout.flexLayout)
    const dispatch = useDispatch()
    let view 

    useEffect(() => {
        dispatch(setHasNavigatedAway(false))
        const handleBeforeUnload = () => {
          dispatch(setHasNavigatedAway(true));
        };
        return () => {
          handleBeforeUnload()
        };
      }, []);


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

export default EditorPage