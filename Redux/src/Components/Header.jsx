import React from "react";
import './Style.css';

function Header(props){
    return(
        <>
        <div className="atc-wrapper item">
            <span className="span">{props.cardData.length}</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1mkcfnQXHuBpQS2OMQ9hnq5fzzBnyeKSCubsRTEzfW_zzhIdI7aToW-crqRsBTTOvPA&usqp=CAU" alt="" />
        </div>
        </>
    )
}
export default Header;