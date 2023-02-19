import React from 'react';
import {useDispatch} from 'react-redux'
import { selectGrid, selectFlex} from '../../redux/layoutSlice';
import shortenURL from '../../utils/shortenURL'
import { copyToClipboard } from '../../utils/copyToClipboard';
import * as Icons from '../../assets/icons'

const Header = () => {

    const dispatch = useDispatch()

    const selectGridLayout = () => {
        dispatch(selectGrid())
    }

    const selectFlexLayout = () => {
        dispatch(selectFlex())
    }

    const shortenLink = async() =>{
        const result = await shortenURL()
        copyToClipboard(result)
        alert('tenés el link copiado')
    }

    return (
        <div className='header'>
            <h1>betterPEN</h1>
            <div >
                <span onClick={shortenLink}>
                    {Icons.share}
                </span>
                <span onClick={selectGridLayout}>
                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22,21V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21A1,1,0,0,0,22,21ZM11,20H4V13h7Zm0-9H4V4h7Zm9,9H13V13h7Zm0-9H13V4h7Z"/>
                    </svg>
                </span>
                <span>
                <svg onClick={selectFlexLayout} fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22,21V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21A1,1,0,0,0,22,21ZM11,20H4V4h7Zm9,0H13V16h7Zm0-6H13V10h7Zm0-6H13V4h7Z"/>
                </svg>
                </span>
            
            </div>
        </div>
    );
}

export default Header;
