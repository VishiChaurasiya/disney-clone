import { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: "HOME",
            icon: HiHome,
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass,
        },
        {
            name: "WATCH LIST",
            icon: HiPlus,
        },
        {
            name: "ORIGINALS",
            icon: HiStar,
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle,
        },
        {
            name: "SERIES",
            icon: HiTv,
        },
    ];
    return (
        <div className="flex items-center justify-between m-2">
            <div className="flex items-center gap-8">
                <img src={logo} alt="logo" className="w-[70px] md:w-[100px]" />
                <div className="hidden md:flex gap-8">
                    {menu.map((item, index) => (
                        <HeaderItem
                            name={item.name}
                            Icon={item.icon}
                            key={index}
                        />
                    ))}
                </div>
                <div className="flex md:hidden gap-5">
                    {menu.map(
                        (item, index) =>
                            index < 3 && (
                                <HeaderItem Icon={item.icon} key={index} />
                            )
                    )}
                    <div
                        className="md:hidden"
                        onClick={() => setToggle(!toggle)}
                    >
                        <HeaderItem name={""} Icon={HiDotsVertical} />
                        {toggle && (
                            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4">
                                {menu.map(
                                    (item, index) =>
                                        index >= 3 && (
                                            <HeaderItem
                                                name={item.name}
                                                Icon={item.icon}
                                                key={index}
                                            />
                                        )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="profile"
                className="w-[40px] md:w-[60px]"
            />
        </div>
    );
}

export default Header;
