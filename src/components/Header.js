import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className="top-area">
                <Link className="top-Logo" to="/">Logo</Link>
                <div className="inserted">
                    <ul>
                        <li>login</li>
                        <li>shop</li>
                        <li>myheart</li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul className="top-cate">
                    <li>HOME</li>
                    <li>CATAGORY</li>
                    <li>BEST</li>
                    <li>NEW</li>
                    <li>EVENT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;