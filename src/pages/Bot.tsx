import { useState, ChangeEvent, useCallback } from "react";
import Input from "../components/atom/Input";
import Radio from "../components/atom/Radio";
import Button from "../components/atom/Button";
import { Slider } from "../components/atom/Slider";
const format = (value: number) => `${value}x`;

const Bot = () => {

    const [volumeOption, setVolumeOption] = useState<string>("daily");
    const [sliderValue, setSliderValue] = useState(10);

    const changeAmountValue = (value: number[]) => {
        setSliderValue(value[0]);
    }

    return (
        <div className="flex w-full pt-[99px] pb-[124px] bg-bot-pattern bg-cover bg-no-repeat relative">
            <div className="mx-auto w-[916px]">
                <div className="font-spicy text-[64px] gradient-text">
                    $MEME Volume Bot
                </div>
                <div className="mt-[39px] flex flex-col w-full items-start">
                    <div className="font-spicy text-[36px] text-[#F5B30D]">
                        Token Address Here
                    </div>
                    <div className="mt-5 w-full">
                        <Input />
                    </div>
                </div>
                <div className="flex flex-col items-start mt-[65px]">
                    <div className="font-spicy text-[36px] text-[#F5B30D]">
                        Volume  Option
                    </div>
                    <div className="w-full flex mt-5 justify-between items-center">
                        <Radio content="daily" option={volumeOption} setOption={setVolumeOption} />
                        <div className="w-[640px]">
                            <Input />
                        </div>
                    </div>
                    <div className="w-full flex mt-5 justify-between items-center">
                        <Radio content="hourly" option={volumeOption} setOption={setVolumeOption} />
                        <div className="w-[640px]">
                            <Input />
                        </div>
                    </div>
                </div>
                <div className="mt-[60px] flex justify-between w-full items-center">
                    <div className="font-spicy text-[48px] text-[#F5B30D]">
                        SOL Input
                    </div>
                    <div className="w-[640px]">
                        <Slider defaultValue={[3]} value={[sliderValue]} onValueChange={changeAmountValue} max={20} step={1} />
                    </div>
                </div>
                <div className="mt-[136px] ml-[246px]">
                    <Button className="rounded-[10px] p-[10px] text-white bg-button-gradient text-[36px] font-caveat">
                        RUN BOT
                    </Button>
                </div>
            </div>
            <div className="absolute -bottom-[71px] left-0">
                <img
                    src="/img/down-man.png"
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 right-0">
                <img
                    src="/img/chair-man.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Bot;