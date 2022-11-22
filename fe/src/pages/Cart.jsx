import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

import numberWithCommas from "../utils/numberWithCommas";
import axios from "axios";
import swal from "sweetalert";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  // const [cartProducts, setCartProducts] = useState(
  //   productData.getCartItemsInfo(cartItems)
  // );
  const member = useSelector((state) => state.cartItems.valueUser);
  //console.log(member)
  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [checkInput,setCheckInput] = useState({
    memberID : member.id,
    memberName: member.name,
    phone: member.phone,
    cost: totalPrice,
    status:'0',
    address:member.address,
    cart: cartItems
  })

  useEffect(() => {
    //setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce( 
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);
  const history = useHistory();

  const submitOrder = async () =>{
    
    await axios({
      method: "POST",
      url: "http://localhost:8000/api/add-oder",
      data: checkInput,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        if (response.data.status === 200) {
          swal("Success", "Đặt hàng thành công", "success");
          console.log(response);
          localStorage.removeItem("cartItems");
          setTimeout(function(){
            window.location.reload(1);
         }, 1000);
        }
        else{
        swal("Error", "Đặt hàng thất bại", "error");
        console.log(response.data);
        }})
      .catch(function(res){
        swal("Error", "Đặt hàng thất bại", "error");
        console.log(res.data);
      })
        


  }

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button color='btn-danger' onClick={()=> submitOrder()} size="block">Đặt hàng</Button>
            
            <Link to="/catalog">
              <Button color = 'btn-light' size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
