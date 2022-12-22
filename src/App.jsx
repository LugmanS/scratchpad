import Playground from "./views/Playground"
import AppContextProvider from "./AppContext"

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <AppContextProvider>
        <Playground/>
      </AppContextProvider>
    </div>
  )
}
export default App