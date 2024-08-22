import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../atom/Button";
import Logo from "../Icon/Logo";
import Telegram from "../Icon/Telegram";
import Twitter from "../Icon/Twitter";

const Header = () => {

    const location = useLocation().pathname;

    return (
        <div className="bg-bg-header w-full xl:pl-[123px] lg:pl-[96px] pl-[96px]  pr-[98px] pt-[33px] pb-[22px] flex justify-between relative items-center relative">
            <Logo />
            <div className="flex xl:gap-[75px] max-lg:hidden lg:gap-[48px] gap-[48px]">
                <Link to="/" className={`text-[27px] font-bold ${location === "/" ? "text-bg-active" : "text-white"}`}>Home</Link>
                <Link to="/memebot" className={`text-[27px] font-bold ${location === "/memebot" ? "text-bg-active" : "text-white"}`}>$MEMES bot</Link>
            </div>
            <div className="flex lg:gap-[72px] gap-[48px] items-center">
                {
                    location === "/" &&
                    <div className="flex gap-[30px] items-center">
                        <Twitter />
                        <Telegram />
                    </div>
                }
                <Button className="text-white max-xl:hidden rounded-[9px] bg-bg-button px-6 py-3 text-[20px] font-medium">
                    {location === "/" ? "Buy Now" : "Connect Wallet"}
                </Button>
                <div className="dropdown lg:hidden">
                    adfadf
                </div>
            </div>
        </div>
    )
}

export default Header;