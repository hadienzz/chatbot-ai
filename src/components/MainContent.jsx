import { useContext } from "react"
import Card from "./Card"
import { AiContext } from "../stores/AiContext"
import Header from "./Header"
import MessageSection from "./MessageSection"

const MainContent = () => {
    const { input, setInput, onSent, resultIsShowing, loading } = useContext(AiContext)

    return (
        <section className="md:pl-15 flex flex-col justify-between lg:w-[900px] md:w-[700px] ">

            <div className=" px-2 ">
                {resultIsShowing || loading ? <MessageSection /> : <Header />}
            </div>

            <div className="sticky bottom-0 left-0 w-full  ">
                <div className=" mx-auto flex gap-4 bg-[#cbcbce] px-6 py-4 rounded-2xl">
                    <input
                        type="text"
                        placeholder="Enter a prompt here"
                        className="flex-1 rounded-full outline-none p-4 bg-[#f0f4f9]"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button
                        className="bg-white text-stone-700 px-3 rounded-3xl cursor-pointer"
                        onClick={() => onSent(input)}
                    >
                        Enter
                    </button>
                </div>
                <p className="text-center text-xs py-2 text-black bg-white">
                    This AI can make mistakes. Please be aware of using it.
                </p>
            </div>



        </section>
    )
}

export default MainContent