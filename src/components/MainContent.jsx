import { useContext } from "react"
import Card from "./Card"
import { AiContext } from "../stores/AiContext"
import Header from "./Header"

const MainContent = () => {
    const { input, setInput, onSent } = useContext(AiContext)

    return (
        <section className="pl-15 pt-2">
            <Header />

            <div className="flex items-center justify-center gap-3 mt-12">
                <input type="text" placeholder="Enter a prompt here" className="flex-1 rounded-4xl outline-none  p-4 bg-stone-200" onChange={(e) => setInput(e.target.value)} value={input} />
                <button className="cursor-pointer bg-stone-950 hover:bg-stone-600 hover:text-stone-200 text-white px-2 py-1  rounded-xl" onClick={() => onSent(input)}>Enter</button>
            </div>

            
        </section>
    )
}

export default MainContent