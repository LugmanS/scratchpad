import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../AppContext";

const Preview = () => {
  const { code } = useContext(AppContext);

  const previewIframe = useRef(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const previewIframeDocument = previewIframe.current.contentDocument || previewIframe.current.contentWindow.document;
      previewIframeDocument.open();
      previewIframeDocument.write(`
      <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body>${code.html}</body>
          <style>${code.css}</style>
          <script>${code.javascript}</script>
      </html>
    `);
      previewIframeDocument.close();
    }, 300);

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <div className="w-full h-full">
      <iframe
        title="preview"
        width="100%"
        height="100%"
        ref={previewIframe}
        style={{ background: "white" }}
      >
      </iframe>
    </div>
  );
};

export default Preview;
