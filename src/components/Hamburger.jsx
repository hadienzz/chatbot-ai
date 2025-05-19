import { useContext } from "react"
import { AiContext } from "../stores/AiContext"
import { Menu } from "lucide-react"

const Hamburger = () => {
    const { onToggle } = useContext(AiContext)

    return (
        <div className="mb-3 md:hidden mt-4">
            <Menu className="cursor-pointer" onClick={onToggle} />
        </div>
    )
}

export default Hamburger