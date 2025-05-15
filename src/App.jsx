import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import AiContextProvider from "./stores/AiContext"

const App = () => {
  return (
    <AiContextProvider>
      <div className="flex ">
        <Sidebar />
        <MainContent />
      </div>
    </AiContextProvider>
  )
}

export default App