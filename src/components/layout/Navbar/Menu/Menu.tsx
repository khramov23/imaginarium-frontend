import {MenuItem} from "@/components/layout/Navbar/Menu/Menu.types";
import {FC} from "react";
import MenuItemComponent from "@/components/layout/Navbar/Menu/MenuItem/MenuItem";

interface MenuProps {
    items: MenuItem[]
}

const Menu: FC<MenuProps> = ({ items }) => {
    return (
        <nav>
            <ul className='list-none'>
                {items.map(item => (
                    <MenuItemComponent item={item}/>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;