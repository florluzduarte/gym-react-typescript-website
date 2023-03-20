import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";

type Props = {
    selectedPage: string;
    setSelectedPage: (value:string) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between";

  return (
    <nav>
        <div
            className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>

                {/* LEFT SIDE - LOGO */}
                <div className={`${flexBetween} w-2/6 gap-16`}>
                    <img src={Logo} alt="logo" />
                </div>

                {/* RIGHT SIDE - LINKS */}
                <div className={`${flexBetween} w-full`}>
                    {/* RIGHT SIDE - Inner left links */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>

                    {/* RIGHT SIDE - Inner right side - members */}
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <button>Become a Member</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;