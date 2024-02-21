import { useEffect, useState } from "react";

export default function ToggleSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function handleTheme() {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);
  if (
    localStorage.getItem("theme") === "dark" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <main className="relative h-[94vh] text-center font-openSans transition duration-300 dark:bg-black">
      <div className="absolute left-1/2 top-1/2 mx-auto w-full max-w-xl -translate-x-1/2 -translate-y-1/2 py-10 sm:max-w-md">
        <h2 className="mb-8 text-3xl font-bold dark:text-white sm:text-4xl">
          Switch Theme
        </h2>
        <div className="relative mx-auto w-full max-w-[8rem] rounded-full">
          <input
            type="checkbox"
            className="peer absolute inset-0 z-30 cursor-pointer opacity-0"
            onChange={handleTheme}
            checked={theme === "dark"}
          />
          <div className="absolute left-2 top-1 rounded-full bg-blueDark p-5 transition duration-500 peer-checked:left-auto peer-checked:translate-x-20 peer-checked:bg-white"></div>
          <div className="w-full rounded-full border border-black bg-white px-8 py-6 transition duration-500 peer-checked:border-blueDark peer-checked:bg-blueDark dark:bg-white"></div>
        </div>
      </div>
    </main>
  );
}
