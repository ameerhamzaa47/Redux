import {connect} from 'react-redux'
import AddToCart from '../Services/Action/Action'
import RemoveToCart from '../Services/Action/Action'
import Home from "../Components/Home";


const mapStateToProps=state=>({
    // cardData:state
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(AddToCart(data)),
    removeToCartHandler:data=>dispatch(RemoveToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home