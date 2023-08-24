import './App.scss';
import { useEffect, useRef } from 'react';
import Header from './component/Header';
import Section1 from './component/Section1';
import ParticleCanvas from './component/ParticleCanvas';



export default function App() {  

  return (
    <div className='app'>
      <ParticleCanvas></ParticleCanvas>
      <Header/>
      <Section1/>
    </div>
   );
}
