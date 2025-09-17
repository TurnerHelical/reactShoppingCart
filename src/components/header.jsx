
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
                    <li><Link to={'/'}>Link 1</Link></li>
                    <li><Link to={'shop'}>Link 2</Link></li>
                    <li><Link to={'cart'}>Link 3</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header