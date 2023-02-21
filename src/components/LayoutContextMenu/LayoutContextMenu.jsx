import {useDispatch} from 'react-redux'
import { selectGrid, selectFlex, selectReverseFlex} from '../../redux/layoutSlice';
import * as Icons from '../../assets/icons'

const LayoutContextMenu = ({isOpen}) =>{

    const dispatch = useDispatch()

    const selectGridLayout = () => {
        dispatch(selectGrid())
    }
    const selectFlexLayout = () => {
        dispatch(selectFlex())
    }
    const selectReverseFlexLayout = () => {
        dispatch(selectReverseFlex())
    }

    return (
        <>
            <div className='layout-context-menu' style={isOpen ? {opacity : 1} : {opacity:0}}>
                <span onClick={selectGridLayout}>
                    {Icons.gridLayout}
                </span>
                <span onClick={selectReverseFlexLayout}>
                    {Icons.flexLayout}
                </span>
                <span onClick={selectFlexLayout}> 
                    {Icons.flexLayout}
                </span>
            </div>
        
        </>
    )
}

export default LayoutContextMenu