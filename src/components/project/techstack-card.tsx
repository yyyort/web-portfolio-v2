import React from "react";

export default function TechStackCard({ stack }: { stack: string[] }) {
  return (
    <div className="flex gap-3 flex-wrap justify-end mt-2">
      {stack.map((tech, index) => (
        <span
          key={index}
          className="flex items-center rounded-[0.4rem] max-h-[2rem] text-nowrap
              lg:p-2 lg:text-base
              mobile_s:p-1 mobile_s:text-xs
              dark:bg-white dark:text-black
                border-slate-300 border-2
              "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
