import { useRef, ReactNode } from "react";

interface ScrollContainerProps {
  children: ReactNode;
  scrollAmount?: number;
}

export default function ScrollContainer({
  children,
  scrollAmount,
}: ScrollContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function handleScroll(direction: "left" | "right") {
    const scroll = scrollAmount ?? 400;

    if (scrollContainerRef.current) {
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -= scroll;
      } else {
        scrollContainerRef.current.scrollLeft += scroll;
      }
    }
  }

  return (
    <div className="relative">
      <div
        className=" flex gap-x-6 overflow-x-scroll transition-all duration-300"
        ref={scrollContainerRef}
      >
        {children}

        <div className="absolute left-0 md:-left-8 top-1/2 transform -translate-y-1/2">
          <button
            className="bg-white text-accent text-lg font-bold px-3 py-2 rounded-full shadow-lg hover:bg-gray-100"
            onClick={() => handleScroll("left")}
          >
            &lt;
          </button>
        </div>

        <div className="absolute right-0 md:-right-8 top-1/2 transform -translate-y-1/2">
          <button
            className="bg-white text-accent text-lg font-bold px-3 py-2 rounded-full shadow-lg hover:bg-gray-100"
            onClick={() => handleScroll("right")}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
