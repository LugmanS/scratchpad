import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { tabs } from "../../utils/constants";

const TabBar = () => {
  const { activeTab, setActiveTab } = useContext(AppContext)

  const TabButton = ({ buttonData }) => {
    return (
      <button
        className={`${
          activeTab === buttonData.slug ? "opacity-100" : "hover:opacity-100 duration-200 transition ease-in-out opacity-60"
        } text-p_text text-xs font-light px-4 flex h-8 items-center relative border-r border-p_border gap-1 italic ${
          activeTab === buttonData.slug ? "border-b border-b-dark_primary" : "bg-dark_background"
        }`}
        onClick={() => setActiveTab(buttonData.slug)}
      >
        <img src={buttonData.icon} className="w-4 h-4" />
        <p>{buttonData.label}</p>
      </button>
    )
  }


  return (
    <div className="h-8 w-full border-b border-p_border flex items-center justify-between">
      <div className="flex items-center">
        {tabs.map((data, index) => (
          <TabButton
            buttonData={data}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default TabBar
