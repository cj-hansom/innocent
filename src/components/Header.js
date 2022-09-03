import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar } from "@material-ui/core";
import innocent5 from "../assets/img/avatars/innocent5.png";





const Header = (props) => {




    return (
        <div>
            <AppBar position="fixed" color={"secondary"}
                elevation={4}
                style={{ backgroundColor: "black" }}
            >
                <Toolbar>
                    <Avatar
                        alt="innocent uchenye"
                        src={innocent5}
                        sx={{ width: 90, height: 90 }}
                    />
                    <div style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end"
                    }} >
                        <ul className="headerbtn">
                            <li>About Me</li>
                            <li>Career</li>
                            <li >Projects</li>
                            <li >Contacts</li>
                        </ul>
                    </div>

                </Toolbar>
            </AppBar>

        </div>
    );

}

export default Header;