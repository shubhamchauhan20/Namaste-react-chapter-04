
import React from "react";
import ReactDOM from "react-dom/client";
// import './components/index.css';
// import 'index.css';
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";



// const BurgerKing = {
//     img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ig1ah7db0aex0ytysesj",
//     name : "Burger King",
//     cusine: ["Burger", "American"],
//     rating: "4.3",
// };






const Footer = () => {
    return (
        <h1>Footer</h1>
    )
}

const AppLayout = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <Body />
            <Footer />
        </React.Fragment>
    )
}





const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)