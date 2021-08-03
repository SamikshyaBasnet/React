import React, { useState, useEffect } from 'react'
import './style.css'
//get the local storage data back]
// get the localStorage data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
};


const Todo = () => {
    const [inputdata, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditItem, setIsEditItem] = useState("");
    const [togglebutton, setToggleButton] = useState(false);

    //add the item
    const addItem = () => {
        if (!inputdata) {
            alert("Please add the input data")
        }
        else if (inputdata && togglebutton) {
            setItems(
                items.map((currElem) => {
                    if (currElem.id === isEditItem) {

                        return { ...currElem, name: inputdata }
                    }
                    return currElem;

                })
            )
            setInputData("");
            setToggleButton(false)
            setIsEditItem(null);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData])
            setInputData("")
            setToggleButton(true)
            // console.log(items);
        }
    }

    //edit the items

    const editItem = (index) => {
        const item_todo_edited = items.find((currElem) => {
            return currElem.id === index
        });
        setInputData(item_todo_edited.name);
        setToggleButton(true)
        setIsEditItem(index);

    }

    //how to delete the items section
    const deleteItem = (index) => {
        const updatedItem = items.filter((currElem) => {
            return currElem.id !== index;
        });
        setItems(updatedItem)
    };

    //remove all the elements

    const removeAllElements = () => {
        setItems([])
    }
    //adding the local storage
    // adding localStorage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.png" alt="" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div className="addItems">

                        <input
                            type="text"
                            className="form-control" value={inputdata}
                            onChange={(event) => setInputData(event.target.value)}
                            placeholder="✍ Add Item" />
                        {togglebutton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) : (
                            <i className="fa fa-plus add-btn" onClick={addItem}></i>)
                        }

                    </div>
                    {/* show our items */}
                    <div className="showItems">
                        {
                            items.map((currElem, index) => {
                                return (
                                    <div className="eachItem" key={currElem.id}>
                                        <h3>{currElem.name}</h3>

                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" onClick={() => editItem(currElem.id)}></i>

                                            <i className="fas fa-trash-alt add-btn" onClick={() => deleteItem(currElem.id)}></i>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                    {/* remove all buttons */}

                    <div className="showItems"><button className="btn effect04" data-sm-link-text="Remove All"
                        onClick={removeAllElements}>
                        <span>CHECKLIST</span></button></div>
                </div>
            </div>


        </>
    )
}

export default Todo
