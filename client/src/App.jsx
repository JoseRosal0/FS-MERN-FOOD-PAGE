import { useState } from 'react'
import menu from "../src/assets/menu.png"
import {Header} from "../src/components/Header.jsx"
import { ProductsSection } from './components/ProductsSection.jsx'
import {Information} from "./components/Information.jsx"
import { Footer } from './components/Footer.jsx'

import './App.css'

function App() {
  return (
    <>
      <Header></Header>
      <ProductsSection/>
      <Information></Information>
      <Footer/>
    </>
  )
}

export default App
