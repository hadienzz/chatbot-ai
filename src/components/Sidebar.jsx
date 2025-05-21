import { useContext } from "react";
import { AiContext } from "../stores/AiContext";
import ButtonStart from "./ButtonStart";
import { Trash2 } from "lucide-react";

const Sidebar = () => {
    const { allChat, onSelectChat, onDelete } = useContext(AiContext);

    return (
        <>
            <aside className=" lg:min-w-1/6 md:w-1/7 bg-[#f0f4f9] px-4 pt-6 sticky top-0 h-screen hidden md:block">
                <ButtonStart />
                <h1 className="py-4 font-semibold">Recent Chat</h1>
                <ul className="w-full space-y-2 overflow-y-auto max-h-[85vh]">
                    {allChat.map((chat) => {
                        const lastUserMessage = chat.messages.find((m) => m.role === "user");
                        return (
                            <div className="w-full bg-white flex items-center justify-between p-2 hover:bg-gray-200 transition cursor-pointer rounded-md shadow-sm" key={chat.chatId} onClick={() => onSelectChat(chat.chatId)}>
                                <p className="truncate">{lastUserMessage.parts[0].text.slice(0, 30)}</p>
                                <Trash2 className="min-w-[24px]" onClick={() => onDelete(chat.chatId)} />
                            </div>
                        );
                    })}
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;