import { useState } from 'react'
import { Link } from 'react-router';

const Header = () => {
    // const [page, setPage] = useState('home');
    return (
        <header>
            <div>
                <img src="#"/>
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