import { useState } from "react";
import { FooterList } from "@/constants/conFooter";
import "./Footer.scss";
const Footer = () => {
  const [active, setActive] = useState("item1");
  const toggleItem = (id) => {
    const newId = id;
    setActive(newId);
  };
  const forMapItem = (item) => {
    return (
      <li
        key={item.id}
        className={`footer__item ${item.id === active ? "footer__item--active" : ""}`}
      >
        <a
          className={`footer__link  ${item.id === active ? "footer__link--active" : ""}`}
          onClick={() => toggleItem(item.id)}
        >
          {item.title}
        </a>
      </li>
    );
  };
  const child = FooterList.map(forMapItem);
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">{child}</ul>
        <span className="footer__copyright">copyright</span>
      </div>
    </footer>
  );
};

export default Footer;
