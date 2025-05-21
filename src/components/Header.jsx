import Card from "./Card"
import { useContext } from "react"
import MenuBar from "./MenuBar"
import { AiContext } from "../stores/AiContext"
import Hamburger from "./Hamburger"

const Header = () => {
    const { isOpen } = useContext(AiContext)

    const CARD_CONTENT = [
        { text: 'Ask AI: “Give me unique weekend getaway ideas”' },
        { text: 'Need motivation? Try: “Write me an inspiring quote for today”' },
        { text: 'Learn fast: “Explain React.js like I’m in middle school”' },
        { text: 'Help me think: “What are the pros and cons of remote work?”' },
        { text: 'Don’t know what to watch? Try: “Recommend a movie like Inception”' },
        { text: 'Curious about science? Ask: “Why is the sky blue?”' },
        { text: 'Tech talk? Try: “What is Web3 in simple terms?”' },
        { text: 'Need advice? Ask: “Time management tips for busy students”' },
        { text: 'Want something random? Try: “Tell me a weird fact about ants”' },
        { text: 'Need a laugh? Ask: “Tell me a silly dad joke”' },
        { text: 'Plan my day: “What’s a productive morning routine?”' },
        { text: 'Get creative: “Write a short story about a robot and a cat”' },
        { text: 'Boost my skills: “How can I improve my communication at work?”' },
        { text: 'Learn something quick: “What is quantum computing in 1 minute?”' },
        { text: 'Explore the world: “Tell me 5 hidden gems to visit in Europe”' },
        { text: 'Prepare for a chat: “Ice-breaker questions for a new team”' },
        { text: 'Be healthier: “Simple meal plan for clean eating”' },
        { text: 'Think deep: “What makes a good life?”' },
        { text: 'Be poetic: “Write me a poem about the ocean at night”' },
        { text: 'Level up: “What should I learn after mastering JavaScript?”' },
        { text: 'Feel better: “Give me something to calm my anxiety”' },
        { text: 'Try something new: “Give me a random creative hobby to try”' },
        { text: 'Be inspired: “What’s the most powerful quote about courage?”' },
        { text: 'Get career tips: “What should I put in my resume summary?”' },
        { text: 'Sharpen your mind: “Challenge me with a fun logic puzzle”' }
    ]

    const genRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }

    return (
        <>
            {isOpen ? <MenuBar /> : null}

            <div className=" px-2">
                <Hamburger />
                <h1 className="text-stone-400 text-lg">Hadin Chatbot</h1>
            </div>

            <main className="px-2">

                <div className=" text-5xl">
                    <h1 className=" font-medium bg-gradient-to-r from-[#4b90ff] to-[#ff5546] inline-block h-[60px] bg-clip-text text-transparent">Hello, People!</h1>
                    <h1 className=" text-[#c4c7c5] font-medium">How Can i assist you today?</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mt-16 mt-8 h-[230px]">
                    <Card text={CARD_CONTENT[genRandomInt(CARD_CONTENT.length)]} />
                    <Card text={CARD_CONTENT[genRandomInt(CARD_CONTENT.length)]} />
                    <Card text={CARD_CONTENT[genRandomInt(CARD_CONTENT.length)]} />
                    <Card text={CARD_CONTENT[genRandomInt(CARD_CONTENT.length)]} />
                </div>
            </main>

        </>
    )
}

export default Header