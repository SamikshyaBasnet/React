import React from 'react'
import "./style.css";
const UseState = () => {
    const initialData = 0;
    const [myNum, setMyNum] = React.useState(initialData)

    console.log(myNum);
    return (
        <>
            <div className="center-div">
                <p>{myNum}</p>

                <div class="middle">

                    <div href="" class="btn btn3" onClick={() => setMyNum(myNum + 1)} >Increase Me</div>
                    <div href="" class="btn btn4" onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>Decrease Me</div>
                </div>
            </div>

        </>
    )
}

export default UseState


