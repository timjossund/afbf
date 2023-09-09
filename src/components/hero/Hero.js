import './Hero.css';
import flag from './HeroAssets/Arkansas.jpg'

export default function Hero() {
    return (
        <section className='heroWrapper'>
            <div className='overlayWrapper'>
                <div className='heroContent'>
                    <img src={flag} className='heroFlag'/>
                    <h1>Arkansas Fundamental Baptist Fellowship</h1>
                </div>
            </div>
        </section>
    )
}