import React, {useState, useEffect} from 'react'
import "./style.css";
const UseEffect = () => {
    const initialData = 0;
    const [myNum, setMyNum] = React.useState(initialData)

    useEffect(() => {
      document.title = `Chats(${myNum})`
    })
 
    return (
        <>
            <div className="center-div">
                <p>{myNum}</p>

                <div className="middle">

                    <div href="" className="btn btn3" onClick={() => setMyNum(myNum + 1)} >Increase Me</div>
                    {/* <div href="" class="btn btn4" onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>Decrease Me</div> */}
                </div>
            </div>

        </>
    )
}

export default UseEffect


