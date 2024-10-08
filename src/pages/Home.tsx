import Button from "../components/atom/Button";
import Component1 from "../components/atom/Component1";
import Component2 from "../components/atom/Component2";
import Component3 from "../components/atom/Component3";
import human from "../components/Icon/human.svg";
import human2 from "../components/Icon/human2.svg";
import human3 from "../components/Icon/human3.svg";
import vector2 from "../components/Icon/vector2.svg";
import icon1 from "../components/Icon/icon1.svg";
import icon2 from "../components/Icon/icon2.svg";
import icon3 from "../components/Icon/icon3.svg";
import icon4 from "../components/Icon/icon4.svg";
import icon5 from "../components/Icon/icon2-1.svg";
import telegramIcon from "../components/Icon/telegramIcon.svg";
import telegramIcon2 from "../components/Icon/telegramIcon2.svg";
import thumb from "../components/Icon/thumb.svg";
import head from "../components/Icon/head.svg";
import arrowUp from "../components/Icon/arrowUp.svg";
import arrowUp45 from "../components/Icon/arrowUp45.svg";
import arrowRight from "../components/Icon/arrowRight.svg";
import arrowDown45 from "../components/Icon/arrowDown45.svg";
import animal from "../components/Icon/animal.svg";
import road from "../components/Icon/road.svg";
import footerbackground from "../components/Icon/footerbackground.svg";
import twitterX from "../components/Icon/twitterX.svg";

const Home = () => {
    return (
        <div className="bg-bg-active overflow-x-hidden">
            <img
                src="/img/meme-main.png"
                className="w-full"
            />
            <div className="flex flex-col mt-[98px] flex flex-col text-center">
                <div className="font-spicy md:text-[108px] text-[62px]  text-[#F5B30D]  gradient-text self-center">
                    Solana Volume Booster
                </div>
                <div className="font-caveat text-white text-3xl self-center px-2">
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
                <div className="flex xl:flex-row flex-col">
                    <div className="xl:w-1/2 w-full xl:ml-36 mx-2  text-center">
                        <div className="font-spicy md:text-[62px] text-[48px] mx-2 mt-20 text-[#F5B30D]">
                            Boost the Visibility of Your Project and Attract More Investors
                        </div>
                        <div className="font-caveat text-white mt-6 mx-4 text-[33px]">
                            $Memes is your exclusive gateway to pushing your project's success on the Solana chain. Crafted for projects looking to bring in more
                            investors and increase their
                            token' s visibility, $Memes is a perfect solution designed to boost trading volume and captivate the crypto community's attention.
                        </div>
                        <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px] self-center">
                            Access Bot
                        </Button>
                    </div>
                    <div className="image2 xl:w-1/2 w-full mt-16 xl:flex xl:self-center">
                        <img src={human} alt="human" className="cover float-right "></img>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-spicy xl:text-[104px] md:text-[62px] sm:text-[48px] text-[36px] mx-2 mt-20 text-[#F5B30D] gradient-text">
                        Calculate your Estimate Volume
                    </div>
                    <div className="font-caveat text-white mt-6 text-[33px] mx-4 text-center">
                        Get an instant estimate of your trading volume potential with $Memes. Discover the power of your project's growth using the calculator!
                    </div>
                    <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px] self-center">
                        Access Bot
                    </Button>
                </div>
                <div className="flex container self-center mt-20 relative">
                    <div className="border border-[#F5B30D] border-[3px] rounded-[42px] max-md:px-4 px-20 py-24 w-full mx-16 ">
                        <div className="flex xl:flex-row flex-col">
                            <div className="xl:w-1/2 flex flex-col xl:text-left justify-center">
                                <div className="font-spicy text-[33px] text-[#F5B30D]">
                                    Package:
                                </div>
                                <div className="font-caveat text-white text-[35px]">
                                    Starter Booster 9 SOL
                                </div>
                            </div>
                            <div className="flex xl:w-1/2 max-sm:justify-center xl:mt-0 mt-4 max-md:flex-wrap flex-nowrap sm:justify-center sm:gap-4 justify-between">
                                <img src={icon1} alt="icon1" className="m-2"></img>
                                <img src={icon2} alt="icon2" className="m-2"></img>
                                <img src={icon3} alt="icon3" className="m-2"></img>
                                <img src={icon4} alt="icon4" className="m-2"></img>
                            </div>
                        </div>
                        <div className="flex mt-20 xl:flex-row flex-col">
                            <div className="xl:w-1/2 flex flex-col justify-center">
                                <div className="font-spicy xl:text-left text-[35px] text-[#F5B30D]">
                                    Your token price change:
                                </div>
                            </div>
                            <div className="flex xl:w-1/2 justify-center">
                                <img src={icon5} alt="icon5" className=""></img>
                            </div>
                        </div>
                        <div className="flex mt-16 max-xl:justify-center">
                            <div className="xl:w-1/2 flex flex-col justify-center">
                                <div className="font-spicy max-xl:mx-4 xl:text-left text-[35px] text-[#F5B30D]">
                                    Solana Price:
                                </div>
                            </div>
                            <div className="flex flex flex-col justify-center">
                                <div className="font-caveat text-white text-[35px]">
                                    $143.7
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#F5B30D] flex xl:flex-row flex-col max-xl:items-center py-16 mt-20 rounded-[13px]">
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
                            <img src={human2} alt="human2" className="absolute bottom-1 right-0 xl:w-[30vw] max-xl:hidden"></img>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mt-36">
                    <div className="w-1/2 flex items-center justify-center visible max-xl:hidden">
                        <img src={thumb} alt="thumb" className="w-[72%]"></img>
                    </div>
                    <div className="xl:w-1/2 xl:pr-20 xl:px-0 px-8 flex flex-col justify-center">
                        <div className="font-spicy text-center xl:text-[62px] text-[48px] text-[#F5B30D]">
                            Order Multiple $MEMES Bots In One Go
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px]">
                            Highly recommended addition to the main $MEMES packages. With $MEMES you can significantly increase transaction amount, volume,
                            and project visibility. $MEMES Bots operate for approximately 12 hours and can only be purchased with the main package
                        </div>
                        <div className="flex xl:justify-between justify-center xl:mt-0 mt-4">
                            <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px]">
                                Access Bot
                            </Button>
                            <img src={head} alt="head" className="w-[160px] max-xl:hidden"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-40">
                    <div className="font-spicy text-[62px] mt-20 text-[#F5B30D]">
                        FOMO effect with $MEMES Bots
                    </div>
                    <div className="font-caveat text-white mt-6 text-[33px] text-center">
                        Combine up to 6 MicroBots to generate transactions of varying<br /> sizes, creating a more organic chart appearance.
                    </div>
                    <div className="flex flex-wrap gap-8 max-xl:justify-center mt-16 justify-between px-12">
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
                            Key Features Tailored for Your Project
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px] text-center w-[975px]">
                            Unlock the potential of your project with $MEMES, featuring a set of carefully crafted features designed to boost your project's visibility,
                            attract investors, and drive growth within the dynamic Solana chain.
                        </div>
                    </div>
                    <div className="absolute top-0 left-[-240px]">
                        <img src={animal} alt="animal" className="w-[800px]"></img>
                    </div>
                </div>
                <div className="mt-20 flex justify-center relative flex-col">
                    <img src={road} alt="road" className="pt-24"></img>
                    {/* <img src="road.png" alt='road' className="pt-28"></img> */}
                    <div>
                        <div className="absolute left-[360px] top-[96px]">
                            <Component2 heading="Investor Magnetism" description="Attract more investors by showcasing increased trading activity. 
                        #MEME positions your project as a compelling opportunity, drawing in potential supporters."></Component2>
                        </div>
                        <div className="absolute left-[1200px] top-[60px]">
                            <Component2 heading="Exclusive Access" description="$MEME is designed exclusively for projects seeking enhanced
                         visibility, growth, and increased exposure. With Orbitt MM, you can gain a competitive edge in the market and 
                         achieve your goals faster."></Component2>
                        </div>
                        <div className="absolute left-[100px] top-[460px]">
                            <Component2 heading="Strategic Volume Boost" description="$MEME  focuses on strategically increasing your project's trading volume
                         creating a dynamic environment that attracts potential investors."></Component2>
                        </div>
                        <div className="absolute left-[960px] top-[720px]">
                            <Component2 heading="Flexible Packages" description="Instantly generate volume with our tailored packages. With $MEME your 
                        volume creation begins immediately after purchasing a package."></Component2>
                        </div>
                        <div className="absolute right-[100px] top-[600px]">
                            <Component2 heading="Dedicated Support" description="Benefit from dedicated customer support committed to helping your project to thrive.
                         Our team is here to assist in every step"></Component2>
                        </div>
                        <div className="absolute left-[360px] top-[1080px]">
                            <Component3 heading2="Token Visibility Enhancement" description2="Elevate your token's visibility with Orbitt MM's specialized features. 
                        Capture the crypto community's attention and stand out among other projects on the Solana network."></Component3>
                        </div>
                        <div className="flex justify-center">
                            <Button className="mt-40 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px]">
                                Access Bot
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex mb-40">
                    <div className="w-1/2 mt-40 ml-36">
                        <div className="font-spicy text-[62px] mt-20 text-[#F5B30D]">
                            Set $MEME directly <br />on Telegram
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px]">
                            Explore the powerful capabilities of $MEME which is conveniently accessible on Telegram. Connect with a user-friendly bot that can help you achieve
                            success for your Solana project. Are you ready to learn more? Click 'Access Bot' and start your journey towards the future of tremendous growth.
                            Your path to success is just a few clicks away!
                        </div>

                        <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px] self-center">
                            Access Bot
                        </Button>
                    </div>
                    <div className="image2 w-1/2 relative top-16">
                        <img src={human3} alt="human" className="cover absolute right-[-160px] min-w-[800px]"></img>
                        <img src={telegramIcon} alt="telegramIcon" className="cover absolute bottom-[30px] right-[440px]"></img>
                    </div>
                </div>
                <div className="flex container self-center mt-20 mb-40 relative">
                    <div className="border border-[#F5B30D] border-[3px] rounded-[42px] w-full mx-16 flex flex-col items-center text-center">
                        <div className="font-spicy text-[62px] text-[#F5B30D]  px-20  pt-24 ">
                            JOIN $MEME COMMUNITY
                        </div>
                        <div className="font-caveat text-white mt-6 text-[33px] pr-20  px-20 ">
                            Be a part of the $MEME Community – your hub for engaging conversations, updates, and collaboration. Connect with like-minded
                            enthusiasts on $MEME Telegram. Ready to join?
                        </div>

                        <Button className="mt-16 text-white rounded-[9px] text-[20px] h-[74px] bg-bg-button w-[255px]">
                            Go To Group
                        </Button>
                        <img src={footerbackground} alt="footerbackground" className="w-full cover rounded-[42px]"></img>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="font-caveat text-white text-[35px] flex self-center">
                        Reach out to us on:
                    </div>
                    <img src={telegramIcon2} alt="telegramIcon2" className="w-[60px] mx-8"></img>
                    <img src={twitterX} alt="twitterX" className="w-[50px]"></img>
                </div>
                <div className="font-caveat text-white text-[35px] mt-8 mb-12 flex self-center">
                    for direct support and community engagement.
                </div>
            </div>
        </div>
    )
}

export default Home;