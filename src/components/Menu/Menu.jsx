/* eslint-disable */
import { useState } from 'react';
import { MenuList } from '@/contatns/conMenu';
// import { useHeaderData } from '@/hooks/useMenuData';
import './Menu.scss';

const Menu = () => {
  // const { headerMenuList } = useHeaderData();
  const [active, setActive] = useState('item1');
  const toggleItem = (id) => {
    const newId = id;
    setActive(newId);
  };
  const forMapItem = (item) => {
    return (
      <li
        key={item.id}
        className={`menu__item ${item.id === active ? 'menu__item--active' : ''}`}
      >
        <a className={`menu__link  ${item.id === active ? 'menu__link--active' : ''}`} onClick={() => toggleItem(item.id)}>{item.title}</a>
      </li>
    )
  };
  const child = MenuList.map(forMapItem);
  return (
    <section className="menu">
      <ul className="menu__list">
        {child}
      </ul>
    </section>
  );
}

export default Menu
