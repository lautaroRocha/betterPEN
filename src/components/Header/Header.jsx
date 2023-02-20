import { useState } from 'react';
import shortenURL from '../../utils/shortenURL'
import { copyToClipboard } from '../../utils/copyToClipboard';
import * as Icons from '../../assets/icons'
import {LayoutContextMenu} from '../../components';
import toast from 'react-hot-toast';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const notify = () => toast.promise(
        shortenURL(),
        {
            duration: 4000,
            loading: 'Shortening URL...',
            success: <b>Url copied to clipboard!</b>,
            error: <b>An error happened, try again.</b>,
           
        }
       );

    const shortenLink = async() =>{
        const result = await shortenURL()
        notify()
        copyToClipboard(result)
    }

    return (
        <div className='header'>
            <h1>
            sharePEN
            </h1>
            {Icons.logo}
            <div >
                <span onClick={shortenLink} >
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
