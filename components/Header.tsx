import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Front-End / Cloud Developer</button>
                    <h1 className="white">Building Tomorrow&#39;s Technology,</h1>
                    <h1 className="white">One Line of Code at a Time</h1>
                    <p className="gray">I build websites and cloud applications.</p>
                    <a className="green" href="mailto:bllipps199@gmail.com">Let&#39;s chat!</a>
                </div> 
                <Image src="/images/bobby.png" width={463} height={513} alt="Bobby Lipps"  /> 
            </div>
        </header>
    )
}