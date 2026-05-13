import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPhone,
    FaEnvelope,
    FaClock
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer
                className="text-light pt-5 pb-4 mt-5"
                style={{ backgroundColor: "#111" }}
            >
                <div className="container">
                    <div className="row">

                        {/* ABOUT */}
                        <div className="col-lg-4 mb-4">
                            <h4 className="fw-bold mb-3 text-danger">
                                404 Apparels
                            </h4>

                            <p className="text-light-emphasis">
                                404 Apparels is more than clothing —
                                it's a statement for people who create
                                their own path.
                            </p>

                            <p className="text-light-emphasis">
                                <strong className="text-danger">
                                    404 Not Found. Never Average.
                                </strong>
                            </p>
                        </div>

                        {/* CONTACT */}
                        <div className="col-lg-4 mb-4">
                            <h4 className="fw-bold mb-3">
                                Contact Us
                            </h4>

                            <p>
                                <FaPhone className="me-2 text-success" />
                                +254 105926331 / +254706346317 / +254113165047
                            </p>

                            <p>
                                <FaEnvelope className="me-2 text-success" />
                                404apparels@gmail.com
                            </p>

                            <p>
                                <FaClock className="me-2 text-success" />
                                Mon - Sun : 9AM - 8PM
                            </p>
                        </div>

                        {/* SOCIALS */}
                        <div className="col-lg-4 mb-4">
                            <h4 className="fw-bold mb-3">
                                Stay Connected
                            </h4>

                            <div className="d-flex gap-3 fs-3">

                                <a
                                    href="https://facebook.com"
                                    className="text-light"
                                >
                                    <FaFacebook />
                                </a>

                                <a
                                    href="https://instagram.com"
                                    className="text-light"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="https://twitter.com"
                                    className="text-light"
                                >
                                    <FaTwitter />
                                </a>
                            </div>

                            <p className="mt-4 text-light-emphasis">
                                We aim to respond to all messages
                                within 24 hours.
                            </p>
                        </div>
                    </div>

                    <hr className="border-secondary" />

                    <div className="text-center pt-2">
                        <p className="mb-0 text-light-emphasis">
                            © 2026 404 Apparels. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;