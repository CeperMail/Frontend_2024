import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin: 0 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default StyledNavbar;
