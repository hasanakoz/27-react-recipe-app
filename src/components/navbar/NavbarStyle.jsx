import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
`;

export const NavbarRight = styled(StyledNav)`
  display: flex;
  list-style-type: none;
  gap: 1rem;
  align-items: center;
`;
export default StyledNav;
