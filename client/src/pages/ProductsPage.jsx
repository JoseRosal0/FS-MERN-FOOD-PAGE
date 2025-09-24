import {Header} from "../components/HomeComponets/Header.jsx"
import { ProductsSection } from '../components/HomeComponets/ProductsSection.jsx'
import {Information} from "../components/HomeComponets/Information.jsx"
import { Footer } from '../components/HomeComponets/Footer.jsx'
import '../styles/App.css';


export const ProductsPage = ()=>{
    return(
        <>
            <Header></Header>
            <ProductsSection/>
            <Information></Information>
            <Footer/>
        </>
    )
}