import Button from "../components/atom/Button";

const Home = () => {
    return (
        <div className="bg-bg-active">
            <img 
                src="/img/meme-main.png"
                className="w-full"
            />
            <div className="flex flex-col items-center mt-[98px]">
                <div className="font-spicy text-[108px] gradient-text">
                    Solana Volume Booster
                </div>
                <div className="font-caveat text-white">
                    Just three clicks stand between you and a $10 million boost in your project's volume.
                    <br />
                    Don't wait, act now to create a $MEME effect.
                </div>
                <Button className="mt-[66px] text-white rounded-[9px] py-6 px-[72px] bg-bg-button">
                    Access Bot
                </Button>
            </div>
        </div>
    )
}

export default Home;