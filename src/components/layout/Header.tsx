import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../atom/Button";
import Logo from "../Icon/Logo";
import Telegram from "../Icon/Telegram";
import Twitter from "../Icon/Twitter";

const Header = () => {

    const location = useLocation().pathname;

    return (
        <div className="bg-bg-header w-full pl-[127px] pr-[98px] pt-[33px] pb-[22px] flex justify-between relative items-center">
            <Logo />
            <div className="flex gap-[72px]">
                <div className="flex gap-[30px] items-center">
                    <Twitter />
                    <Telegram />
                </div>
                <Button className="text-white rounded-[9px] bg-bg-button px-6 py-3 text-[20px] font-medium">
                    Buy Now
                </Button>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-[75px]">
                <Link to="/" className={`text-[27px] font-bold ${location == "/" ? "text-bg-active" : "text-white"}`}>Home</Link>
                <Link to="/bot" className={`text-[27px] font-bold ${location == "/bot" ? "text-bg-active" : "text-white"}`}>$MEMES bot</Link>
            </div>
        </div>
    )
}

export default Header;