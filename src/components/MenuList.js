import React, { useState } from 'react';
import MenuItem from './MenuItem';


const MenuList = () => {
    const [menuList, setMenuList] = useState(
        [
            
        ]
    )
    return (
        <div>
           <MenuItem/> 
        </div>
    );
};

export default MenuList;