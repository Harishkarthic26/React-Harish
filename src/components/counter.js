import { useDispatch, useSelector } from "react-redux";
import { dynamicAdd,decrement,increment,selectCount } from "../redux/counterreducer";
function Counter(){
    const dispatch = useDispatch();
    const data = useSelector(selectCount)
    return (
        <div>
            <button onClick={()=>dispatch(decrement())}> - </button>
            <p>{data}</p>
            <button onClick={()=> dispatch(increment())} > + </button>
            <button onClick={()=> dispatch(dynamicAdd(2))}> add 5</button>

        </div>
    )
}
export default Counter