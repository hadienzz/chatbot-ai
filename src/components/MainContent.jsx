import { useContext, useRef } from "react"
import Card from "./Card"
import { AiContext } from "../stores/AiContext"
import Header from "./Header"
import MessageSection from "./MessageSection"

const MainContent = () => {
    const { onSent, resultIsShowing, loading } = useContext(AiContext)
    const promptRef = useRef()

    const handleSubmit = () => {
        onSent(promptRef.current.value)
        promptRef.current.value = ''
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleSubmit
        }
    })

    let content

    if (resultIsShowing || loading) {
        content = <MessageSection />
    } else {
        content = <Header />
    }

    console.log(resultIsShowing)

    return (
        <section className="lg:pl-16 md:pl-8  flex flex-col justify-between lg:w-[900px] w-full md:w-[700px] mt-4">

            <div className="">
                {content}
            </div>

            <div className="sticky bottom-0 left-0 w-full bg-white px-2">
                <div className="mx-auto flex gap-4 bg-[#cbcbce] px-6 py-4 rounded-2xl ">
                    <input
                        type="text"
                        placeholder="Enter a prompt here"
                        className="flex-1 rounded-full outline-none p-4 bg-[#f0f4f9]"
                        ref={promptRef}
                    />
                    <button
                        className={`bg-white text-stone-700 px-3 cursor-pointer text-4xl font-bold rounded-full hover:bg-stone-200`}
                        onClick={handleSubmit}
                    >
                        ↑
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