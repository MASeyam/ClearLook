import React, { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        const navCollapse = document.getElementById("navMenu");
        const body = document.body;

        if (navCollapse) {
            const handleShow = () => body.classList.add("nav-open");
            const handleHide = () => body.classList.remove("nav-open");

            navCollapse.addEventListener("show.bs.collapse", handleShow);
            navCollapse.addEventListener("hide.bs.collapse", handleHide);

            // Cleanup listeners
            return () => {
                navCollapse.removeEventListener("show.bs.collapse", handleShow);
                navCollapse.removeEventListener("hide.bs.collapse", handleHide);
            };
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark position-absolute top-0 w-100 z-3 px-4 pt-3">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-light fs-1" href="#">
                    Clear Look
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                    <ul className="navbar-nav align-items-center gap-5 fs-2">
                        <li className="nav-item">
                            <a className="nav-link text-white fs-3" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fs-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fs-3" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="text-white fs-3">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
