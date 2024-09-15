import React from "react";
import { Link } from "react-scroll";

const NavLinks = () => {
    const links = [
        {
            id: '#Shop',
            name: 'Shop',
        },
        {
            id: '#Featured',
            name: 'Featured',
        },
        {   id: '#Service',
            name: 'Service'
        },
        {
            id: '#FAQ',
            name: 'FAQ'
        },
    ];
    return (
        <>
        {
            links.map(link => (
                <div>
                    <div className="px-3 py-7 text-left md:cursor-pointer">
                        <Link activeClass="active" to={link.name} spy={true} smooth={true} offset={-80} duration={500}>
                            {link.name}
                        </Link>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default NavLinks;