import { useState } from 'react';
import shortenURL from '../../utils/shortenURL'
import { copyToClipboard } from '../../utils/copyToClipboard';
import * as Icons from '../../assets/icons'
import {LayoutContextMenu} from '../../components';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const shortenLink = async() =>{
        const result = await shortenURL()
        copyToClipboard(result)
        alert('tenés el link copiado')
    }

    return (
        <div className='header'>
            <h1>
            sharePEN
            </h1>
            {Icons.logo}
            <div >
                <span onClick={shortenLink}>
                    {Icons.share}
                </span>
                <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {Icons.gridLayout}
                </span>
            </div>
            <LayoutContextMenu isOpen={isMenuOpen}/>

        </div>
    );
}

export default Header;
