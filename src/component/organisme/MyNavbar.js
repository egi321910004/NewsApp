import { Link, useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MyNavbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  const searchChange = (e) => {
    setSearchInput(e.target.value.replace(" ", "-"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchInput}`);
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // Navbar Fixed
    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector("#to-top");

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
      }
    };

    if (hamburger) {
      window.addEventListener("click", function (e) {
        if (e.target !== hamburger && e.target !== navMenu) {
          hamburger.classList.remove("hamburger-active");
          navMenu.classList.add("hidden");
        }
      });
    }
  });

  const hamburgerCLick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    // Hamburger
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ">
      <div className="container px-10 xl:px-20">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            {location === "/" ? (
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6 lg:py-3"
              >
                {/* <img src={logo1} alt="" className="w-16" /> */}
              </a>
            ) : (
              <Link
                to="/"
                onClick={topFunction}
                className="font-bold text-lg text-primary block py-6 lg:py-3"
              >
                {/* <img src={logo1} alt="" className="w-16" /> */}
              </Link>
            )}
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={hamburgerCLick}
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute py-5 lg:py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <div className="block lg:flex lg:items-center">
                <ul className="block lg:flex">
                  <li className="group">
                    <NavLink
                      to="/indonesia"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-dark py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base  text-dark py-2 mx-6 flex group-hover:text-primary "
                      }
                    >
                      Indonesia
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/programming"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-dark py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base  text-dark py-2 mx-6 flex group-hover:text-primary "
                      }
                    >
                      Programming
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/covid-19"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-dark py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base text-dark py-2 mx-6 flex group-hover:text-primary "
                      }
                    >
                      Covid-19
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/saved"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-dark py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base  text-dark py-2 mx-6 flex group-hover:text-primary "
                      }
                    >
                      Saved
                    </NavLink>
                  </li>
                </ul>
                <form onSubmit={handleSubmit} className="mx-6 flex">
                  <input
                    type="text"
                    onChange={searchChange}
                    className="text-base border border-primary border-opacity-50 rounded-lg mr-3 px-2 w-1/2"
                  />
                  <button className="py-1 px-3 w-1/2 md:w-1/3 bg-primary rounded-lg shadow-sm text-white transition duration-200 hover:brightness-125">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
