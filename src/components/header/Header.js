import './Header.css';
import logo from './HeaderAssets/afbf.png';

export default function Header() {
    return (
        <div className='headerWrapper'>
            <div className='navWrapper'>
                <div className='logoWrapper'>
                    <h1>AFBF</h1>
                </div>
                <div className='menuWrapper'>
                    <a href="/#about">About AFBF</a>
                </div>
            </div>
        </div>
    );
}