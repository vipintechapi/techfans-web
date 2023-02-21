import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { SetStateAction, useState } from 'react'
import { Icons } from '../utils/icons'
import { Images } from "../utils/images"

const { Contact, Facebook } = Icons

const { Logo } = Images

const Nav = () => {

    const [isActive, setIsActive] = useState("home")
    const [isNav, stIsNav] = useState(false)

    const setActive = (type: string) => {
        setIsActive(type)
    }

    const setNav = () => {
        stIsNav(nav => !nav)
    }

    return (
        <>
            <div className="left">
                <Link href={"/"}>
                    <Image src={Logo} height={30} width={30} alt={"logo"}></Image> Tech Fans
                </Link>
            </div>
            <div className="right">
                <ul className={isNav ? "hide" : ""}>
                    <li className={isActive === "blogs" ? "active" : ""} onClick={() => setActive("blogs")}><Link href={"/blogs"}><Contact />Blogs</Link></li>
                    <li className={isActive === "tools" ? "active" : ""} onClick={() => setActive("tools")}><Link href={"/tools"}><Contact />Tools</Link></li>
                    <li className={isActive === "contact" ? "active" : ""} onClick={() => setActive("contact")}><Link href={"/contact"}><Contact />Contact Us</Link></li>
                    <li className={isActive === "about" ? "active" : ""} onClick={() => setActive("about")}><Link href={"/about"}><Contact />About Us</Link></li>
                </ul>
                <div className="icon">
                    {
                        isNav ? <Contact onClick={setNav} /> : <Facebook onClick={setNav} />
                    }
                </div>
            </div>
        </>
    )
}

export default Nav