import { useState } from "react";

export default function Tabs() {
  const [selectedTabs, setSelectedTabs] = useState(0);
  const content = [
    "This is Tabs 1 ",
    "This is Tabs 2 ",
    "Random Tabs ",
    "Hello World",
    "War World 2",
  ];
  return (
    <main className="absolute left-1/2 top-1/2 mx-auto w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-4 font-openSans">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex flex-wrap justify-center gap-5">
          {content.map((_, index) => {
            return (
              <button
                type="button"
                className="mx-auto w-full max-w-[12rem] rounded-md border border-blueDark bg-blueDark px-8 py-1 text-sm text-white transition duration-300 hover:bg-white hover:text-blueDark"
                key={index}
                onClick={() => setSelectedTabs(index)}
              >
                Tabs {index}
              </button>
            );
          })}
        </div>
        <p className="mx-auto max-w-xs text-center text-2xl font-bold leading-relaxed">
          {content[selectedTabs]}
        </p>
      </div>
    </main>
  );
}
