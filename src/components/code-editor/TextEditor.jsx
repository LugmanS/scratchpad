import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";

const TextEditor = ({ language, value, setValue }) => {

  console.log("Top level", { language, value });

  const handleEditorDidMount = () => {
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
  };

  const handleCodeChange = (value) => {
    console.log(value);
    setValue(value);
  };

  return (
    <div className="h-full">
      <Editor
        theme="vs-dark"
        language={language}
        onMount={handleEditorDidMount}
        options={{
          fontSize: "14px",
          minimap: {
            enabled: false,
          },
          wordWrap: true,
        }}
        value={value}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default TextEditor;
