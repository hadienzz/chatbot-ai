import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import AiContextProvider from "./stores/AiContext"

const App = () => {
  return (
    <div className="flex h-screen overflow-y-auto">
      <AiContextProvider>
        <Sidebar />
        <MainContent />
      </AiContextProvider>
    </div>
  )
}

export default App