import {Header} from "../components/Header.jsx"
import { ProductsSection } from '../components/ProductsSection.jsx'
import {Information} from "../components/Information.jsx"
import { Footer } from '../components/Footer.jsx'

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