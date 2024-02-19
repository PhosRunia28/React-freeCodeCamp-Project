// import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import cn from "classnames";
import { useState } from "react";
export default function StarRating() {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  function handleClick(index) {
    setRating(index);
  }
  function handleEnterStar(index) {
    setHover(index);
  }

  const noOfStar = 6;
  return (
    <main className="absolute left-1/2 top-48 -translate-x-1/2 font-openSans">
      <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
        Star Rating
      </h2>
      <div className="flex">
        {[...Array(noOfStar)].map((_, index) => {
          index += 1;
          return (
            <div
              className={cn("fa fa-star bg-red fa-3x sm:fa-4x cursor-pointer", {
                "text-orange-400": index <= (hover || rating),
              })}
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleEnterStar(index)}
              onMouseLeave={() => setHover(rating)}
            ></div>
          );
        })}
      </div>
    </main>
  );
}
