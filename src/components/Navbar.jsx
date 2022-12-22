import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { flavours } from "../utils/constants";

function Navbar() {
  const { flavour, setFlavour } = useContext(AppContext);

  const TabButton = ({ data }) => {

    const onClick = () => setFlavour(data.slug);

    return (
      <button className={`text-dark_text_secondary text-xs bg-white bg-opacity-5 px-4 py-1.5 rounded-md hover:bg-dark_primary hover:bg-opacity-5 hover:text-dark_primary ${flavour === data.slug && "bg-dark_primary bg-opacity-5 text-dark_primary"}`}
        onClick={onClick}>
        {data.label}
      </button>
    );
  };


  return (
    <div className="w-full h-12 bg-dark_background border-b border-p_border flex items-center justify-between px-4">
      <div className="bg-none flex items-center gap-2 text-gray-300 cursor-pointer">
        <h1>Coddict</h1>
      </div>
      <div className="flex items-center gap-3">
        {
          flavours.map((flavour, index) => <TabButton data={flavour} key={index} />)
        }
      </div>
    </div>
  );
}

export default Navbar;
