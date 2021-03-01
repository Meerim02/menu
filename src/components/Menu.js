import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menu, setMenu] = useState([
        { id: 34, name: "Trout", description: "Delicious", price: 2523, count: 1, },
        { id: 53, name: "Steac", description: "Delicious", price: 975, count: 1, },
        { id: 46, name: "Pizza", description: "Delicious", price: 854, count: 1, },
        { id: 85, name: "Desserts", description: "Delicious", price: 589, count: 1, },
        { id: 74, name: "Ice cream", description: "Delicious", price: 589, count: 1, }
    ])
    const totalPrice = menu.reduce((ans,{price,count })=> ans + price * count,0)

    const deleteItem = (id) => () =>{
        const filtered = menu.filter((item)=>item.id!==id)
        setMenu([...filtered])
    }


    return (
        <div>

            <div className="row mb-2">
                <div className="col-4 font-weight-bold">Блюда</div>
                <div className="col-2  font-weight-bold">Цена</div>
                <div className="col-2  font-weight-bold">Количество</div>
                <div className="col-2  font-weight-bold">Общфя сумма</div>
                <div className="col-2  font-weight-bold"></div>
            </div>
            <h2 />
           {menu.map((item)=><MenuItem deleteItem={deleteItem} item={item}/>)}
            <p className = "text-right">Total:{totalPrice}</p>

        </div>

    );
};

export default Menu;