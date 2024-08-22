import Button from "../components/atom/Button";
import Component1 from "../components/atom/Component1";
import human from "../components/Icon/human.svg";
import human2 from "../components/Icon/human2.svg";
import vector2 from "../components/Icon/vector2.svg";
import icon1 from "../components/Icon/icon1.svg";
import icon2 from "../components/Icon/icon2.svg";
import icon3 from "../components/Icon/icon3.svg";
import icon4 from "../components/Icon/icon4.svg";
import icon5 from "../components/Icon/icon2-1.svg";
import thumb from "../components/Icon/thumb.svg";
import head from "../components/Icon/head.svg";
import arrowUp from "../components/Icon/arrowUp.svg";
import arrowUp45 from "../components/Icon/arrowUp45.svg";
import arrowRight from "../components/Icon/arrowRight.svg";
import arrowDown45 from "../components/Icon/arrowDown45.svg";
import animal from "../components/Icon/animal.svg";
import road from "../components/Icon/road.svg";

const Home = () => {
    return (
        <div className="bg-bg-active">
            <img
                src="/img/meme-main.png"
                className="w-full"
            />
            <div className="flex flex-col mt-[98px] flex flex-col">
                <div className="font-spicy text-[108px] text-[#F5B30D] gradient-text self-center">
                    Solana Volume Booster
                </div>
                <div className="font-caveat text-white text-3xl self-center">
                    Just three clicks stand between you and a $10 million boost in your project's volume.
                    <br />
                    Don't wait, act now to create a $MEME effect.
                </div>
                <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px] self-center">
                    Access Bot
                </Button>
                <div className="vector2 mt-12">
                    <img src={vector2} alt="vector2" className="cover float-left"></img>

                </div>
                <div className="flex">
                    <div className="w-1/2 ml-36">
                        <div className="font-spicy text-[62px] mt-20 text-[#F5B30D]">
                            Boost the Visibility of Your <br />Project and Attract More <br />Investors
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px]">
                            $Memes is your exclusive gateway to pushing your project's success on the Solana chain. Crafted for projects looking to bring in more investors and increase their
                            token' s visibility, $Memes is a perfect solution designed to boost trading volume and captivate the crypto community's attention.
                        </div>
                        <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px] self-center">
                            Access Bot
                        </Button>
                    </div>
                    <div className="image2 w-1/2 mt-18">
                        <img src={human} alt="human" className="cover float-right"></img>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-spicy text-[104px] mt-20 text-[#F5B30D] gradient-text">
                        Calculate your Estimate Volume
                    </div>
                    <div className="font-caveat text-white mt-6 text-[33px] text-center">
                        Get an instant estimate of your trading volume potential with $Memes. Discover the <br />power of your project's growth using the calculator!
                    </div>
                    <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px] self-center">
                        Access Bot
                    </Button>
                </div>
                <div className="flex container self-center mt-20 relative">
                    <div className="border border-[#F5B30D] border-[3px] rounded-[42px] px-20 py-24 w-full mx-16 ">
                        <div className="flex">
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="font-spicy text-[33px] text-[#F5B30D]">
                                    Package:
                                </div>
                                <div className="font-caveat text-white text-[35px]">
                                    Starter Booster 9 SOL
                                </div>
                            </div>
                            <div className="flex w-1/2 justify-between">
                                <img src={icon1} alt="icon1" className=""></img>
                                <img src={icon2} alt="icon2" className=""></img>
                                <img src={icon3} alt="icon3" className=""></img>
                                <img src={icon4} alt="icon4" className=""></img>
                            </div>
                        </div>
                        <div className="flex mt-20">
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="font-spicy text-[35px] text-[#F5B30D]">
                                    Your token price change:
                                </div>
                            </div>
                            <div className="flex w-1/2 justify-between">
                                <img src={icon5} alt="icon5" className=""></img>
                            </div>
                        </div>
                        <div className="flex mt-16">
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="font-spicy text-[35px] text-[#F5B30D]">
                                    Solana Price:
                                </div>
                            </div>
                            <div className="flex flex flex-col justify-center">
                                <div className="font-caveat text-white text-[35px]">
                                    $143.7
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#F5B30D] flex py-16 mt-20 rounded-[13px]">
                            <div className="w-1/2 flex flex-col justify-center items-center">
                                <div className="font-spicy text-[48px] text-white">
                                    Estimate<br />Boost Volume:
                                </div>
                            </div>
                            <div className="flex flex flex-col justify-center">
                                <div className="font-spicy text-[#4F4B3F] text-[79px]">
                                    $3.23M
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={human2} alt="human2" className="absolute bottom-1 right-0 w-[560px] "></img>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mt-36">
                    <div className="w-1/2 flex items-center justify-center">
                        <img src={thumb} alt="thumb" className="w-[72%]"></img>
                    </div>
                    <div className="w-1/2 pr-20 flex flex-col justify-center ">
                        <div className="font-spicy text-[62px] text-[#F5B30D]">
                            Order Multiple $MEMES Bots <br />
                            In One Go
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px] pr-20">
                            Highly recommended addition to the main $MEMES packages. With $MEMES you can significantly increase transaction amount, volume,
                            and project visibility. $MEMES Bots operate for approximately 12 hours and can only be purchased with the main package
                        </div>
                        <div className="flex justify-between">
                            <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px]">
                                Access Bot
                            </Button>
                            <img src={head} alt="head" className="w-[160px]"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-40">
                    <div className="font-spicy text-[62px] mt-20 text-[#F5B30D]">
                        FOMO effect with $MEMES Bots
                    </div>
                    <div className="font-caveat text-white mt-6 text-[33px] text-center">
                        Combine up to 6 MicroBots to generate transactions of varying<br /> sizes, creating a more organic chart appearance.
                    </div>
                    <div className="flex mt-16 justify-between px-12">
                        <Component1 src={arrowUp} alt="arrowUp" heading="More transactions" description="Each MicroBot doubles the number of transactions"></Component1>
                        <Component1 src={arrowUp45} alt="arrowUp45" heading="Greater visibility" description="More transactions for a bigger FOMO effect"></Component1>
                        <Component1 src={arrowRight} alt="arrowRight" heading="More organic volume" description="Higher organic volume from external sources"></Component1>
                        <Component1 src={arrowDown45} alt="arrowDown45" heading="Better performance" description="Improved overall performance of $MEMES"></Component1>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex justify-center">
                        <Button className="mt-20 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px]">
                            Access Bot
                        </Button>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-spicy text-[62px] text-[#F5B30D] mt-40">
                            Key Features Tailored for Your Project
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px] text-center w-[975px]">
                            Unlock the potential of your project with $MEMES, featuring a set of carefully crafted features designed to boost your project's visibility, attract investors, and drive growth within the dynamic Solana chain.
                        </div>
                    </div>
                    <div className="absolute top-0 left-[-240px]">
                        <img src={animal} alt="animal" className="w-[800px]"></img>
                    </div>
                </div>
                <div className="mt-36 flex justify-center overflow-x-hidden">
                <img src={road} alt="road" className=""></img>
                    
                </div>

            </div>
        </div>
    )
}

export default Home;