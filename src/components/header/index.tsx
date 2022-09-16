import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { UserStateI } from "../../store/slices/constant";


export const HeaderComponent = memo(() => {
  const { isScrollValueMoreThanHeaderHeight } = useSelector(
    (state: {user: UserStateI}) => ({ ...state.user }),
    shallowEqual
  );
  const navConfig = {
    activeClass: "active",
    spy: true,
    smooth: true,
    duration: 500,
  };
  return (
    <header className="header-area">
      <div
        className={`navgition navgition-transparent ${
          isScrollValueMoreThanHeaderHeight ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarOne"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link to="home" {...navConfig}>
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="services" {...navConfig}>
                        New Game
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="pricing" {...navConfig}>
                        Game Cofiguration
                      </Link>
                    </li>
                    
                  </ul>
                </div>
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
