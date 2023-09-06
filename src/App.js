import './App.scss';
import { useEffect, useRef } from 'react';
import Header from './component/Header';
import Section1 from './component/Section1';
import ParticleCanvas from './component/ParticleCanvas';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Scroll100vh from './component/Scroll-100vh';





export default function App() {  
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

}, []);
  return (
      <Scroll100vh>
    <div className='app'>
      <ParticleCanvas></ParticleCanvas>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      
    </div>
      </Scroll100vh>
   );
}
