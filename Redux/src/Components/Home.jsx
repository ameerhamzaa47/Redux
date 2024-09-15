import React from "react";
import './Style.css';
// import Header from "./Header";

function Home(props){
    console.log('Home',props)
    return(
        <>
        <h1>Add to Cart</h1>
        <div className="Cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://s3.ap-south-1.amazonaws.com/www.cimg.in/images/2020/09/06/10/172228002_15993564571_large.jpeg" alt="" />
            </div>
            <div className="text-wrapper item">
                <h3>I-Phone</h3>
                <b>50,000/-</b>
            </div>
            <div className="btn-wrapper item">
                <button onClick=
                {
                    ()=>props.addToCartHandler({name:'I-Phone',price:'50,000/-'})
                }
                >Add to Cart</button>

                <button onClick=
                {
                    ()=>{props.removeToCartHandler()}
                }
                >Remove to Cart</button>
            </div>
        </div>
        </>
    )
}
export default Home