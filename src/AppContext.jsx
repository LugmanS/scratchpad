import { createContext, useState } from "react";
import { flavours, tabs } from "./utils/constants";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");

    const [flavour, setFlavour] = useState(flavours[0].slug)
    const [activeTab, setActiveTab] = useState(tabs[0].slug)
    
      const value = {
        activeTab,
        setActiveTab,
        flavour,
        setFlavour,
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs
      }
    
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider