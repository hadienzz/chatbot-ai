import { createContext, useRef, useState } from "react";
import runChat from "../config/gemini";

export const AiContext = createContext({
    input: '',
    setInput: () => { },
    recentPrompt: '',
    prevPrompts: [],
    showResult: false,
    loading: false,
    resultData: '',
    onSent: () => { },
})

const AiContextProvider = ({ children }) => {
    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompts] = useState('')
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')
    const [chatHistory, setChatHistory] = useState([])

    const onSent = async (prompt) => {
        setChatHistory((prev) => [...prev, { role: 'user', parts: [{ text: prompt }] }])
        const updatedHistory = [...chatHistory, { role: 'user', parts: [{ text: prompt }] }]
        const result = await runChat(updatedHistory)
        const aiReply = result.candidates[0].content.parts[0].text


    }

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        prevPrompts,
        showResult,
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