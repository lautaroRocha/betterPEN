import {Link} from 'react-router-dom'

const HomePage = () => {

    return (
        <div className="content home">
            <h1>
                welcome to sharePEN
            </h1>
            <p>
                A web playground for 
                <span className="violet"> building
                    <span className="hidden">⚙️🔧</span>
                </span> and 
                <span className="green"> sharing
                    <span className="hidden">📩🚀</span>
                </span> 
                websites using HTML, CSS, and JavaScript
            </p>
            <div>
                <Link className='btn violet' to="editor/%7C%7C">start coding</Link>
                <Link className='btn green' to='/explore'>Explore</Link>
            </div>
            <div className="home-images">
                <img src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg" alt="" />
                <img className='second-img' src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg" alt="" />
                <img className='third-img' src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg" alt="" />
                <img className='fourth-img' src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg" alt="" />
            </div>
        </div>
    )
}

export default HomePage