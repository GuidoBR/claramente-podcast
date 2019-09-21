import React from 'react'
import './MainHeader.css'

export default () =>
    <header className="site-navbar py-4 absolute transparent" role="banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-3" data-aos="fade-down">
                    <h1><a href="#" className="text-white h2">Claramente</a></h1>
                </div>
                <div className="col-9" data-aos="fade-down">
                    <nav className="site-navigation position-relative text-right text-md-right" role="navigation">
                        <div className="d-inline-block ml-md-0 mr-auto py-3"><a href="#"
                            className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                        <ul className="site-menu js-clone-nav d-none">
                            <li className="has-children active">
                                <a href="index.html">Home</a>
                                <ul className="dropdown arrow-top">
                                    <li><a href="#">Menu One</a></li>
                                    <li><a href="#">Menu Two</a></li>
                                    <li><a href="#">Menu Three</a></li>
                                    <li className="has-children">
                                        <a href="#">Sub Menu</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Menu One</a></li>
                                            <li><a href="#">Menu Two</a></li>
                                            <li><a href="#">Menu Three</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#">Dropdown</a>
                                <ul className="dropdown arrow-top">
                                    <li><a href="#">Menu One</a></li>
                                    <li><a href="#">Menu Two</a></li>
                                    <li><a href="#">Menu Three</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>