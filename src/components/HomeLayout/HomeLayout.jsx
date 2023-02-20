import {Link} from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className="content home">
            <h1>
                welcome to sharePEN
            </h1>
            <p>
                A web playground for 
                <span className="violet"> building</span> and 
                 <span className="green"> sharing  </span> 
                websites using HTML, CSS, and JavaScript
            </p>
            <Link className='btn violet' to="editor/%7C%7C">start coding</Link>
            <Link className='btn green' to='/explore'>Explore</Link>
        </div>
    )
}

export default HomeLayout