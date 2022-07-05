import { useSelector, useDispatch } from "react-redux";
import {inc, dec, rnd}  from "../action";


const Counter = () => {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();
    
    return (
        <div className="qty mt-5">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="minus bg-dark">-</button>
            <button onClick={() => dispatch(inc())} className="plus bg-dark">+</button>
            <button onClick={() => dispatch(rnd())} className="plus bg-dark">RND</button>
        </div>  
    )
}

export default Counter;

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// export default connect(mapStateToProps, actions)(Counter);

