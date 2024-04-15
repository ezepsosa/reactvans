import { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

export default function Editor({
  tempNote,
  setTempNote,
}: {
  tempNote: string;
  setTempNote: (text: string) => void;
}) {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor">
      <ReactMde
        value={tempNote}
        onChange={setTempNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
}
