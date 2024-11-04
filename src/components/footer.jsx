import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="heading">
                      <h4>ZAINT</h4>
                      <p>Zaint represents an exclusive development service within the Framer platform, offering meticulously designed, fully functional, and remarkably accurate Framer websites.</p>
                </div>  

                <div className="list-table">
                <div>
                    <ul className="list">
                        <li className="title">
                            Explore
                        </li>
                        <li>
                            Team Member
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="list">
                        <li className="title">
                            Blog
                        </li>
                        <li>
                            Blog v1
                        </li>
                        <li>
                            Blog v2
                        </li>
                        <li>
                            Blog single
                        </li>
                    </ul>

                </div>

                <div>
                    <ul className="list">
                        <li className="title">
                            Our Work
                        </li>
                        <li>
                            Project v1
                        </li>
                        <li>
                            Project v2
                        </li>
                        <li>
                            Project single
                        </li>
                    </ul>

                </div>

                <div>
                    <ul className="list">
                        <li className="title">
                            Services
                        </li>
                        <li>
                            Services v1
                        </li>
                        <li>
                            Services v2
                        </li>
                        <li>
                            Services single
                        </li>
                    </ul>

                </div>

                </div>
            </div>
        </>
    )
}


export default Footer