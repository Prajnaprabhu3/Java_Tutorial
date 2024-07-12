import SplitPane from "react-split-pane";
import { FaHtml5 } from "react-icons/fa";

export default function NewProject() {
  return (
    <div className="w-full h-screen flex flex-col  items-start justify-start overflow-y-hidden">
      {/* header  */}

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
                <div className="flex items-center gap-x-2">
                  <FaHtml5 className="text-red-500" />
                  <p>HTML</p>
                </div>

                {/* icons  */}
                <div></div>
              </div>

              {/* code editor  */}
              <div></div>
            </div>
            <SplitPane
              split="vertical"
              minSize={100}
              maxSize={900}
              defaultSize={500}
            >
              <div>Pane 2</div>
              <div>Pane 3</div>
            </SplitPane>
          </SplitPane>

          {/* preview  */}
          <div></div>
        </SplitPane>
      </div>
    </div>
  );
}
