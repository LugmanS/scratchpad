import TextEditor from "./TextEditor";
import TabBar from "./TabBar";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { tabs } from "../../utils/constants";

const CodeEditor = () => {

  const { activeTab, html,
    setHtml,
    css,
    setCss,
    js,
    setJs } = useContext(AppContext);

  return (
    <div className="h-full w-full">
      <TabBar />
      {
        activeTab === tabs[1].slug ?
          <TextEditor language="css" value={css} setValue={setCss} />
          : activeTab === tabs[2].slug ? <TextEditor language="javascript" value={js} setValue={setJs} /> : <TextEditor language="html" value={html} setValue={setHtml} />
      }
    </div>
  );
};

export default CodeEditor;
