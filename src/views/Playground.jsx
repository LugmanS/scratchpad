import CodeEditor from "../components/code-editor/CodeEditor"
import Split from "react-split"
import Navbar from "../components/Navbar"
import Preview from "../components/Preview"

function Playground() {
  return (
      <div className="h-screen w-screen bg-dark_background">
        <Navbar />
        <Split direction="horizontal" minSize={400} className="flex h-screen-nav" style={{width: "100vw"}}>
          <CodeEditor />
          <Preview />
        </Split>
      </div>
  )
}

export default Playground
