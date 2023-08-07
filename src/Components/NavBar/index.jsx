import { NavBarContainer, NavBarOptions } from "./style";

export const NavBar = ({ onPageClick, pages }) => {
  return (
    <NavBarContainer>
      {pages.map((page) => (
        <NavBarOptions onClick={() => onPageClick(page.key)}>
          {page.displayName}
        </NavBarOptions>
      ))}
    </NavBarContainer>
  );
};
