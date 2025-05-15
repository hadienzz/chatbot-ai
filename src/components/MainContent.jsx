import { useContext } from "react"
import Card from "./Card"
import { AiContext } from "../stores/AiContext"

const MainContent = () => {
    const { input, setInput, onSent } = useContext(AiContext)

    return (
        <>
            <div className="">
                <h1 className="text-stone-400 text-lg">Hadin Chatbot</h1>
            </div>

            <main className="pl-15 pt-2 w-[900px]">

                <div className="pt-15 text-5xl">
                    <h1 className=" font-medium bg-gradient-to-r from-[#5e21d8] via-[#009cff] to-[#92fe9d] inline-block h-[60px] bg-clip-text text-transparent">Hello, People!</h1>
                    <h1 className=" text-stone-400 font-medium">How Can i assist you today?</h1>
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mt-16 ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className="grid">
                    <input type="text" placeholder="Enter a prompt here" className="w-full rounded-4xl outline-none mt-12 p-4 bg-stone-200" onChange={(e) => setInput(e.target.value)} value={input} />
                    <button className="cursor-pointer bg-black text-white p-1 rounded-xl" onClick={() => onSent(input)}>Enter</button>
                </div>
            </main>
        </>
    )
}

export default MainContent