import { addToCart,  remove_from_cart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Button, Grid, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Mycorousel from "./Mycorousel";
import DeleteIcon from '@mui/icons-material/Delete';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("data in main component from saga", data)

  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <div className="w3-center">

      {/* <img src="images/corousel/4.png" width={'100%'} alt=""/> */}
      <Mycorousel />
      {/* <div>
        <button id="btn3"onClick={() => dispatch(emptyCart())}>EMPTY_CART</button>
        </div>

        <div>
        <button id="btn4"onClick={() => dispatch(productList())}>Get Product List</button>
        </div> */}

      <div className="w3-pannel w3-center w3-xlarge">
        <span className="w3-red w3-padding w3-round-xlarge">Products</span>
      </div>

    
      <div className="product-container">
   
        {
          data.map((item) => <div key={item.id} className="product-item">
            <img src={item.photo} alt="" width={"200px"} height={"200px"} />

            <div>Name: {item.name}</div>
            <div>color : {item.color}</div>
            <div>price : {item.price}</div>
            <div>category : {item.category}</div>
            <div>brand : {item.brand}</div>
          
              <Button  color="primary"   variant="contained" onClick={() => dispatch(addToCart(item))  } className="w3-margin" startIcon={<AddIcon />}>Add to Cart</Button>
              <Button color="error"  variant="contained" onClick={() => dispatch(remove_from_cart(item.id)) }    startIcon={<DeleteIcon />}>Remove</Button>

          </div>)
        }
  

      </div>
    


    </div>
  );
}

export default Main;