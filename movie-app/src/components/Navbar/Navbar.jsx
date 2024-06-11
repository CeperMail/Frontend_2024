import StyledNavbar, { NavbarLink } from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Movie app</h1>
        </div>
        <div>
          <ul>
            <li>
              <NavbarLink to="/">Home</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/movie/Create">Add Movie</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/movie/Popular">Popular</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/movie/NowPlaying">Now Playing</NavbarLink>
            </li>
            <li>
              <NavbarLink to="/movie/TopRated">Top Rated</NavbarLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
