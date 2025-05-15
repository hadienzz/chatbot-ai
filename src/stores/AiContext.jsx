import { createContext, useEffect, useRef, useState } from "react";
import runChat from "../config/gemini";

export const AiContext = createContext({
    input: '',
    setInput: () => { },
    recentPrompt: '',
    prevPrompts: [],
    resultIsShowing: false,
    loading: false,
    resultData: '',
    onSent: () => { },
})

const AiContextProvider = ({ children }) => {
    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompts] = useState('')
    const [prevPrompts, setPrevPrompts] = useState([])
    const [resultIsShowing, setResultIsShowing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')
    const [chatHistory, setChatHistory] = useState([])

    const onSent = async (prompt) => {
        const updatedHistory = [...chatHistory, { role: 'user', parts: [{ text: prompt }] }]
        const result = await runChat(updatedHistory)
        const aiReply = result.candidates[0].content.parts[0].text

        setResultIsShowing(true)
        setChatHistory([
            ...updatedHistory,
            { role: 'model', parts: [{ text: aiReply }] }
        ])
    }

    useEffect(() => {
        console.log(chatHistory)
    }, [chatHistory])

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        prevPrompts,
        resultIsShowing,
        loading,
        resultData,
        onSent
    }



    return (
        <AiContext.Provider value={contextValue}>
            {children}
        </AiContext.Provider>
    )
}

export default AiContextProvider