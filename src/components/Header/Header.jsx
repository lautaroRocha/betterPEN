import { useState } from 'react';
import shortenURL from '../../utils/shortenURL'
import { copyToClipboard } from '../../utils/copyToClipboard';
import * as Icons from '../../assets/icons'
import {LayoutContextMenu, SavingPenModal} from '../../components';
import toast from 'react-hot-toast';
import {useLocation, Link} from 'react-router-dom'


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const {pathname} = useLocation()

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
                <Link to="/">
                    sharePEN
                </Link>
            </h1>
            <Link to="/">
            {Icons.logo}
            </Link>
            {pathname.includes('editor') &&
            <>
            <div >
                <span onClick={()=>{setIsModalOpen(!isModalOpen)}}>
                    {Icons.save}
                </span>
                <span onClick={shortenLink} >
                    {Icons.share}
                </span>
                <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {Icons.gridLayout}
                </span>
            </div>
            <LayoutContextMenu isOpen={isMenuOpen}/>
            <SavingPenModal isOpen={isModalOpen} 
                            closeModal={()=>setIsModalOpen(false)}/>
            </>
            }
        </div>
    );
}

export default Header;
