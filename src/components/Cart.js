import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../redux/action";
import { TextFieldProps } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
  console.warn(amount)
  return (
    <div  >
      <div className="w3-pannel w3-center w3-medium w3-margin">
        
        <span className="w3-red w3-padding w3-margin  w3-large w3-round-xxlarge">Your Shopping Cart</span>
         
        <span className="w3-hide-large">
                <span className="w3-dropdown-hover ">
                    <button className="w3-button w3-red fa fa-bars"> Options</button>
                    <div className="w3-dropdown-content w3-bar-block w3-border">
                    <Link to="/" className="w3-right w3-small w3-margin-right"><Button variant="text"  color="error" size="xs"  startIcon={<ArrowBackIcon />} ><text id="t1">Go to Products Page</text></Button></Link>
        <span className="w3-small"><Button variant="text" onClick={() => dispatch(emptyCart())}    color="error" size="xs"     startIcon={<DeleteIcon/>}><text id="t2">EMPTY_CART</text></Button></span>
                      </div>
                </span>
            </span>
   
        <Link to="/" className="w3-right w3-hide-small w3-hide-medium   w3-margin-right"><Button variant="text"  color="error" startIcon={<ArrowBackIcon />}>Go to Products Page</Button></Link>
        <span className="w3-hide-small w3-hide-medium w3-right"><Button variant="text" onClick={() => dispatch(emptyCart())}  color="error" startIcon={<DeleteIcon/>} >EMPTY_CART</Button></span>
     
      </div>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
            <td>Item</td>
          </tr>
          {
            cartData.map((item) => <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td><img src={item.photo} alt="" width={"50px"} height={"50px"} />
              </td>
            </tr>)
          }
        </table>
        <div className="price-details">
          <div className="adjust-price"><span>Amount  </span>  <span>{amount}</span></div>
          <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
          <div className="adjust-price"><span>Tax     </span><span>{amount * 15 / 100}</span></div>
          <div className="adjust-price"><span>Total   </span><span>{amount - (amount / 10) + (amount * 15 / 100)}</span></div>

        </div>


      </div>
    </div>
  );
}

export default Cart;
