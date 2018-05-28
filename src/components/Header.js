import React, {Component} from "react";

import "./css/header.css";

class Header extends Component {

    openMenuDrawer(e) {
        e.preventDefault();
        let drawerMenu = document.getElementById("drawermenu");
        let currentState = parseInt(drawerMenu.style.width, 10);
        if (isNaN(currentState) || currentState > 0) {
            drawerMenu.style.width = "0";
        } else {
            drawerMenu.style.width = "250px";
        }
    }

    /* Set the width of the side navigation to 0 */
    closeMenuDrawer(e) {
        e.preventDefault();
        document.getElementById("drawermenu").style.width = "0";
    }


    render() {
        return (
            <header className="navbar navbar-static-top" id="header">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-left" id="drawerBtn" type="button" onClick={this.openMenuDrawer}>
                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                        </button>
                        <div id="drawermenu" className="drawermenu">
                            <a href="#" className="closebtn" onClick={this.closeMenuDrawer}>&times;</a>
                            <a href="/linktoitem-1">item 1</a>
                            <a href="/linktoitem-2">item 2</a>
                            <a href="/linktoitem-3">item 3</a>
                            <a href="/linktoitem-4">item n</a>
                        </div>
                        <a className="navbar-logo" href="/">LOGO!</a>
                        <div className="navbar-right">
                            <span className="markfav">
                                <span className="glyphicon glyphicon-heart"></span>
                                <sup>{this.props.totalFav}</sup>
                            </span>
                            <a className="toplogin" href="/">Login</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
