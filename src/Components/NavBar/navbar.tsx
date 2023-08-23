import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {

  return (
    <AppBar position="static">
      <Toolbar className="Toolbar">
        <Typography variant="h4" className="Logo">
            <Link to="/" className="Logo">
              Lucy Ying
            </Link>
        </Typography>
          <div className="NavLink">
            <Link to="/career" className="Link">
              Career
            </Link>
            <Link to="/fun" className="Link">
              Fun
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;