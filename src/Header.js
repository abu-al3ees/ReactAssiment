
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import './Header.css'

const Header = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState("");

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };
  return (
    <div>
      <header>
        {!logoutUser && login && login.userLogin ? (
          <Button class="logout"
          style={{ width: "100px",height:'50px',background:'#e72424',border:'none',borderRadius:'5px'}}
            variant="contained"
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          
          <Link to="/login">
            <Button class='login'
           style={{ width: "100px",height:'50px',border:'none',borderRadius:'5px'}}
               variant="contained"
              color="secondary"
            >
              Login
            </Button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;