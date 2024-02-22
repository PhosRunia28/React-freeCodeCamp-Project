import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPErcentage] = useState(0);
  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPErcentage(Math.floor((howMuchScrolled / height) * 100));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => window.removeEventListener("scroll", handleScrollPercentage);
  }, []);
  return (
    <main className="relative  px-6 pb-8 pt-14 font-openSans">
      <div className="fixed inset-x-0 top-8 h-4 w-full bg-blueDark">
        <motion.div
          initial={{ width: `${scrollPercentage}%` }}
          animate={{ width: `${scrollPercentage}%` }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-0 top-0 h-4 bg-green-500"
        ></motion.div>
      </div>
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-3xl font-bold">Scroll Indicator</h2>
        <div className="mt-8 flex flex-col gap-10 text-sm">
          {[...Array(15)].map((_, index) => {
            return (
              <p className="leading-loose" key={index}>
                {index}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora voluptas earum repellat a. Eligendi eum, ipsum harum
                nulla, blanditiis perferendis voluptas ipsa error vel sed nihil
                non ab assumenda! Mollitia, velit ut! Magnam quidem ullam dolor!
                Ex maxime nisi quidem debitis? Dolor aut autem cum voluptatibus
                atque fugiat ad harum?
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
}
