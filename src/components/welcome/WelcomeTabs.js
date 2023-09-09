import { useState } from 'react';
import './WelcomeTabs.css';
import pastor2 from './welcomeAssets/IMG_8292.jpeg';
import pastor1 from './welcomeAssets/afbfp.jpg';

export default function WelcomeTabs() {

    const [showTabOne, setShowTabOne] = useState(true)
    const [showTabTwo, setShowTabTwo] = useState(false)
    const [showTabThree, setShowTabThree] = useState(false)

    function showTabBoxOne() {
        setShowTabOne(true);
        setShowTabTwo(false);
        setShowTabThree(false);
    }
    function showTabBoxTwo() {
        setShowTabOne(false);
        setShowTabTwo(true);
        setShowTabThree(false);
    }
    function showTabBoxThree() {
        setShowTabOne(false);
        setShowTabTwo(false);
        setShowTabThree(true);
    }
    
    return (
        <section className='welcomeWrapper'>
            <div className="tabsWrapper">
                {showTabOne ? 
                    <div className="tab-active"  onClick={showTabBoxOne}>
                        Officers
                    </div>
                : 
                    <div className="tab"  onClick={showTabBoxOne}>
                         Officers
                    </div>
                }
                {showTabTwo ? 
                    <div className="tab-active"  onClick={showTabBoxTwo}>
                        Churches
                    </div> 
                : 
                    <div className="tab"  onClick={showTabBoxTwo}>
                        Churches
                    </div>
                }
                {showTabThree ? 
                    <div className="tab-active " onClick={showTabBoxThree}>
                        Events
                    </div>
                :
                    <div className="tab" onClick={showTabBoxThree}>
                        Events
                    </div>
                }
            </div>
            {showTabOne ? 
            <div className="contentWrapper">
                <div className="contentBox">
                    <div className='imgWrapper'>
                        <img className='officerPic' src={pastor1} />
                    </div>
                    <h2>TED PATTERSON</h2>
                    <h4>President and Treasurer of the AFBF</h4>
                    <p>Pastor at Jacksonville Baptist Temple <br />in Jacksonville, AR<br />(501) 982-6433<br />jacksonvillebaptist.org</p>
                </div>
                <div className="contentBox">
                    <div className='imgWrapper'>
                        <img className='officerPic' src={pastor2} />
                    </div>
                    <h2>Nate Jossund</h2>
                    <h4>Secretary of the AFBF</h4>
                    <p>Pastor at Bible Baptist Church <br />in Conway, AR<br />(501) 327-5221<br />bbcconway.com</p>
                </div>
            </div> : null }

            {showTabTwo ? 
            <div className="contentWrapper">
                <iframe src="https://www.google.com/maps/d/embed?mid=1qWfg1rRCBTc6aGdvUnWxBfkWcGE&z=7" width="100%" height="480px"></iframe>
            </div> : null }

            {showTabThree ? 
            <div className="contentWrapper">
                <iframe src="https://calendar.google.com/calendar/embed?src=afbfinfo%40gmail.com&ctz=America%2FChicago" width="100%" height="480px" ></iframe>
            </div> : null }
        </section>
    )
}