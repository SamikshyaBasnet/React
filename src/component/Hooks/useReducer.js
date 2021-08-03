import React, {useReducer} from 'react'
import "./style.css";
// import { useReducer } from "react";

const reducer = (state, action)=>{
    if(action.type === "INCR"){
      state = state+1
    }
    if( state>0 && action.type === "DCR"){
        state = state-1
      }
    
      return state
}
const UseReducer = () => {

    const initialData = 10
    const [state, dispatch] = useReducer(reducer, initialData)
 
    return (
        <>
            <div className="center-div">
                <p>{state}</p>

                <div className="middle">

                    <div href="" className="btn btn3" onClick={()=>dispatch({type:"INCR"})} >Increase Me</div>
                    <div href="" class="btn btn4" onClick={()=>dispatch({type:"DCR"})}>Decrease Me</div>
                </div>
            </div>

        </>
    )
}

export default UseReducer


