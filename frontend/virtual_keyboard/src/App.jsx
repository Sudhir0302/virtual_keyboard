import React from 'react'
import './assets/App.css';
import Mobile from './Mobile';
import Desktop from './Desktop';

const App = () => {

  const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

  return (
    <>
    {isMobile ?<Mobile /> : <Desktop />}
    </>

  )
}

export default App