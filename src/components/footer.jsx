import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center text-lg-start">
                <div className="text-center p-3"style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2025 Copyright:
                    <NavLink href="#" className="text-body">Marwa Helmy</NavLink>
                </div>
            </footer>
        </>
    );
};

export default Footer;
