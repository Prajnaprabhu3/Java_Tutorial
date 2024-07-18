import SplitPane from "react-split-pane";
import { FaHtml5, FaChevronDown, FaCss3Alt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState, useEffect } from "react";

export default function NewProject() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJSCode] = useState("");
  const [combinedCode, setCombinedCode] = useState("");

  useEffect(() => {
    outPut();
  }, [htmlCode, cssCode, jsCode]);

  const outPut = () => {
    const combinedCode = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>  
    </html>
    `;

    setCombinedCode(combinedCode);
  };

  return (
    <div className="w-full h-screen  items-start justify-start">
      {/* header  */}
      <div className="bg-green-200">Header</div>

      <div>
        {/* horizontal pane  */}
        <SplitPane
          split="horizontal"
          minSize={100}
          maxSize={-100}
          defaultSize={"50%"}
        >
          {/* coding  */}
          <SplitPane
            split="vertical"
            minSize={100}
            maxSize={500}
            defaultSize={500}
          >
            <div>
              {/* header  */}
              <div className="flex items-center justify-between">
                {/* html logo  */}
                <div className="flex items-center gap-x-2 bg-zinc-800 px-3.5 py-2">
                  <FaHtml5 className="text-red-500" />
                  <p className="text-sm">HTML</p>
                </div>

                {/* icons  */}
                <div className="flex items-center gap-x-3 px-4">
                  <IoMdSettings className="cursor-pointer" />
                  <FaChevronDown size="12" className="cursor-pointer" />
                </div>
              </div>
              {/* code editor  */}
              <CodeMirror
                value={htmlCode}
                height="600px"
                theme={"dark"}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                  setHtmlCode(value);
                }}
              />
            </div>

            <SplitPane
              split="vertical"
              minSize={100}
              maxSize={900}
              defaultSize={500}
            >
              {/* css code */}
              <div>
                <div className="flex items-center justify-between">
                  {/*  logo  */}
                  <div className="flex items-center gap-x-2 bg-zinc-800 px-3.5 py-2">
                    <FaCss3Alt className="text-blue-500" />
                    <p className="text-sm">CSS</p>
                  </div>
                  {/* icons  */}
                  <div className="flex items-center gap-x-3 px-4">
                    <IoMdSettings className="cursor-pointer" />
                    <FaChevronDown size="12" className="cursor-pointer" />
                  </div>
                </div>

                <CodeMirror
                  value={cssCode}
                  height="600px"
                  theme={"dark"}
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, viewUpdate) => {
                    setCssCode(value);
                  }}
                />
              </div>

              {/* js code  */}
              <div>
                <div className="flex items-center justify-between">
                  {/* logo  */}
                  <div className="flex items-center gap-x-2 bg-zinc-800 px-3.5 py-2">
                    <IoLogoJavascript className="text-yellow-400" />
                    <p className="text-sm">JS</p>
                  </div>
                  {/* icons  */}
                  <div className="flex items-center gap-x-3 px-4">
                    <IoMdSettings className="cursor-pointer" />
                    <FaChevronDown size="12" className="cursor-pointer" />
                  </div>
                </div>

                <CodeMirror
                  value={jsCode}
                  height="600px"
                  theme={"dark"}
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, viewUpdate) => {
                    setJSCode(value);
                  }}
                />
              </div>
            </SplitPane>
          </SplitPane>

          {/* preview  */}
          <div className="bg-white overflow-hidden h-full">
            <iframe
              title="Result"
              srcDoc={combinedCode}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </SplitPane>
      </div>
    </div>
  );
}
