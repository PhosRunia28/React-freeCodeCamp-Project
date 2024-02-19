import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import cn from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function ImageSlider() {
  const images = useLoaderData();
  const [currentImage, setCurrentImage] = useState(0);

  function prevImage() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }
  function nextImage() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }
  return (
    <main className="mx-auto mt-20 max-w-xl overflow-hidden">
      <div className="relative flex">
        <ArrowLeftIcon
          className="absolute left-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 cursor-pointer bg-white"
          onClick={prevImage}
        />
        {images.map((image) => {
          return (
            <motion.img
              src={image.download_url}
              alt={image.id}
              className="w-full"
              key={image.id}
              initial={{ x: 0 }}
              animate={{ x: -576 * currentImage }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
        <ArrowRightIcon
          className="absolute right-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 cursor-pointer bg-white"
          onClick={nextImage}
        />
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => {
            return (
              <div
                className={cn("h-6 w-6 cursor-pointer rounded-full", {
                  "bg-white": currentImage === index,
                  "bg-gray-400": currentImage !== index,
                })}
                key={index}
                onClick={() => setCurrentImage(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export const ImageSliderLoader = async () => {
  const page = 1;
  const limit = 6;
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
  );
  if (!res.ok) {
    throw {
      message: "failed to fetch",
      statusText: res.statusText,
      status: res.status,
    };
  }
  return res.json();
};
