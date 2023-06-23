import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { productSearch } from "../redux/productAction";


import './header.css';
import './headersmall.css'

const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch();

    console.log("redux data in header", result)
    return (<div className=" header-container  ">
        <div className="logo" >
            <Link to="/">
             <span className="logo-img">   <img src="./images/logo.png"  alt="" /></span>
            </Link>
        </div>

        <span className="btn-grp-L">

            <button className="btn" >Edible Oils</button>
            <button className="btn">Foods</button>
            <button className="btn">Ready to Cook</button>
            <button className="btn">Fortunes Recipes</button>
            <button className="btn">About US</button>
            <Link to="/contact">
            <button className="btn">Contact Us</button>
            </Link>
            
        </span>

        <span className="btn-grp-s ">

            <div className="dropdown">
            
            <button className="dropbtn"> Products Menu</button>
           
            <div className="dropdown-content">
                <button className="btn-s">Edible Oils</button>
                <button className="btn-s">Foods</button>
                <button className="btn-s">Ready to Cook</button>
                <button className="btn-s">Fortunes Recipes</button>
                <button className="btn-s">About US</button>
                <Link to="/contact"><button className="btn-s">Contact Us</button></Link>
                <input placeholder="Search Product " onChange={(event) => dispatch(productSearch(event.target.value))}  className="fa-fa-search "></input>
            </div>
            </div>
            

        </span>
        <input placeholder="Search Product " onChange={(event) => dispatch(productSearch(event.target.value))}  className="fa-fa-search input-search"></input>
    
        <Link to="/cart" className="link">

            <span className="result">{result.length}</span>
            
            <span className="cart"><img src="images/cart.png" /></span>


        </Link>



    </div>);
}

export default Header;