import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <div>

            <div className="row mb-2">
                <div className="col-4 font-weight-bold">Блюда</div>
                <div className="col-2  font-weight-bold">Цена</div>
                <div className="col-2  font-weight-bold">Количество</div>
                <div className="col-2  font-weight-bold">Общфя сумма</div>
                <div className="col-2  font-weight-bold"></div>
            </div>
         <h2/>
         <MenuItem/>
         <MenuItem/>
         <MenuItem/>
         <MenuItem/>
         <MenuItem/>

        </div>

    );
};

export default Menu;