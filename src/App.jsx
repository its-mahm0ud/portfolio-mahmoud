
import { useEffect } from 'react';
import './App.css'

import HomePages from './Pages/HomePages'
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 }); // مدة الانيميشن بالمللي ثانية
  }, []);


  return (
    <>
      <HomePages />
    </>
  )
}

export default App
