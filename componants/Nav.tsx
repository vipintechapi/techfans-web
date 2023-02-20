import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Images } from "../utils/images"

const { Logo } = Images

const Nav = () => {
    return (
        <>
            <div className="left">
                <Link href={"/"}>
                    <Image src={Logo} height={30} width={30} alt={"logo"}></Image> Tech Fans
                </Link>
            </div>
            <div className="right">
                <ul>
                    <li><Link href={"/blogs"}>Blogs</Link></li>
                    <li><Link href={"/tools"}>Tools</Link></li>
                    <li><Link href={"/contact"}>Contact Us</Link></li>
                    <li><Link href={"/about"}>About Us</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav