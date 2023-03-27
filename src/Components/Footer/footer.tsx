import React, { FC, ReactElement } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
  } from "@mui/material";
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import './footer.css'

export const Footer: FC = (): ReactElement => {
    return (        
        <AppBar position="static">
            <Toolbar className="footerContainer">
                <Typography variant="subtitle1" className="Logo">
                    Lucy Ying's Personal Website
                </Typography>
                <div className="NavLink">
                    <Link to="https://www.linkedin.com/in/lucy-ying/" className="Link">
                        <Icon path={mdiLinkedin} size={1} title="LinkedIn"/>
                    </Link>
                    <Link to="https://github.com/IYamGitHub" className="Link">
                        <Icon path={mdiGithub} size={1} title="Github"/>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;