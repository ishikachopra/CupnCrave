import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import MenuList from "./menulist";
import Footer from "./footer";
import AddToCartPage from "./Menu/add-to-cart";
import AddToCartCoffeePage from "./Menu/add-to-cart-coffee";
import Cart from "./cart";
import LoginPage from "./loginpage";
// import CakeMenu from "./Menu/cake";


function HomePage() {
    // const [selectedCake, setSelectedCake] = useState(null);
    return (
        <>
            <BrowserRouter basename="/CupnCrave">
                <Nav />
                    <Routes>
                        <Route path="/" element={<Section1 />} />
                        <Route path="/about" element={<Section2 />} />
                        <Route path="/contact" element={<Section3 />} />
                        <Route path="/menu/*" element={<MenuList />} />
                    <Route path="/add-to-cart-coffee" element={<AddToCartCoffeePage />} />
                        <Route path="/add-to-cart" element={<AddToCartPage />} />
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/loginpage" element={<LoginPage/>}/>
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default HomePage;