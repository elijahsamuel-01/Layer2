import react from 'react';
import Hero from './Screen/Hero';
import Page1 from './Screen/Page1';
import ThirdComp from './Screen/ThirdComp';
import FourthComponent from './Screen/FourthComponent';
import Additional from './Screen/Additional';
import Pricing from './Screen/Pricing';
import CountSection from './Screen/CountSection';
import AppScrnShot from './Screen/AppScrnShot';
import Demo from './Screen/Demo';
import Template from './Screen/Template';
import TeamMember from './Screen/TeamMember';
import AppNews from './Screen/AppNews';
import TwitterIcon from './Screen/TweetIcon';
import SubscribePage from './Screen/SubscribePage';
import Touch from './Screen/Touch';
const HomeScreen = () =>{
    return(
        <div>
           <Hero/>
           <Page1/>
           <ThirdComp/>
           <FourthComponent/>
           <Additional/>
           <Pricing/>
            <AppScrnShot/>
           <CountSection/>
           <Demo/>
           <Template/>
           <TeamMember/>
           <AppNews/>
           <TwitterIcon/>
           <SubscribePage/>
           <Touch/>
        </div>
    )
}

export default HomeScreen;

