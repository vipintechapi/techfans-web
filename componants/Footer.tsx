import Link from "next/link"
import { Icons } from "../utils/icons"

const { CopyRight, Facebook, Github, Twitter, Instagram } = Icons

const Footer = () => {


    return (
        <>
            <div className="left">
                <Link href="/">
                    <span>Tech Fans </span>
                </Link>
                <CopyRight />
                <span> 2023 - 2024 (All Rights Reserved)</span>
            </div>
            <div className="right">
                <div className="socialMedia">
                    Connect to
                    <a href="#">
                        <Twitter />
                    </a>
                    <a href="#">
                        <Github />
                    </a>
                    <a href="#">
                        <Facebook />
                    </a>
                    <a href="#">
                        <Instagram />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer