import {useDispatch} from 'react-redux'
import { selectGrid, selectFlex} from '../../redux/layoutSlice';
import { useRef } from 'react';

const LayoutContextMenu = ({isOpen}) =>{

    const dispatch = useDispatch()

    const selectGridLayout = () => {
        dispatch(selectGrid())
    }
    const selectFlexLayout = () => {
        dispatch(selectFlex())
    }


    return (
        <div className='layout-context-menu' style={isOpen ? {opacity : 1} : {opacity:0}}>
                <svg onClick={selectGridLayout} fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22,21V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21A1,1,0,0,0,22,21ZM11,20H4V13h7Zm0-9H4V4h7Zm9,9H13V13h7Zm0-9H13V4h7Z"/>
                </svg>
            <svg  fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22,21V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21A1,1,0,0,0,22,21ZM11,20H4V4h7Zm9,0H13V16h7Zm0-6H13V10h7Zm0-6H13V4h7Z"/>
            </svg>
            <svg onClick={selectFlexLayout} fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22,21V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21A1,1,0,0,0,22,21ZM11,20H4V4h7Zm9,0H13V16h7Zm0-6H13V10h7Zm0-6H13V4h7Z"/>
            </svg>
        </div>
    )
}

export default LayoutContextMenu