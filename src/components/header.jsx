
import { Link } from 'react-router';
import '../styles/header.css'


const Header = () => {
    // const [page, setPage] = useState('home');
    return (
        <header>
            <div id='titleDiv'>
                <img id='titleImg' src='src/assets/groceryLogoWithNoName.png'/>
                <h1>Odin's Storefront</h1>
            </div>
            <nav>
                <ul>
                    <li className='navRight'><Link to={'/'} className='navLink'>Link 1</Link></li>
                    <li className='navCenter'><Link to={'shop'} className='navLink'>Link 2</Link></li>
                    <li className='navLeft'><Link to={'cart'} className='navLink'>Link 3</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header