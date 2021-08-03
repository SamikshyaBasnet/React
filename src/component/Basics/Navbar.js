import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="nav-bar">
                <div className="btn-group">
                    {
                        menuList.map((currrElem) => {
                            return <button className="btn-group__item" onClick={() => filterItem(currrElem)}>{currrElem}</button>

                        })
                    }

                    {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
