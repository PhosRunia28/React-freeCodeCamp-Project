import { PinTopIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
export default function ScrollToTop() {
  const howMuchParag = 10;
  const [showPinTopIcon, setShowPinTopIcon] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      // Set the threshold scroll position to determine when to show/hide the PinTopIcon
      const scrollThreshold = 100;
      setShowPinTopIcon(scrollY > scrollThreshold);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="relative mx-auto my-10 flex w-full max-w-2xl flex-col gap-8 px-6 font-openSans">
      {showPinTopIcon && (
        <div
          onClick={handleScroll}
          className="fixed bottom-10 right-10 cursor-pointer rounded-full bg-black p-3"
        >
          <PinTopIcon className="h-4 w-4 text-white" />
        </div>
      )}
      <h2 className="text-center text-3xl font-bold">Scroll to Top</h2>
      {[...Array(howMuchParag)].map((_, index) => {
        return (
          <p className="leading-relaxed" key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            omnis magni architecto provident aliquam molestias aperiam, adipisci
            consectetur aspernatur voluptas possimus recusandae delectus laborum
            officia enim accusamus at labore quod quis iusto! Dolorem
            perspiciatis iusto iste cumque, illo quam consequuntur illum sunt et
            ad harum quod corrupti provident ab quae.
          </p>
        );
      })}
    </main>
  );
}
