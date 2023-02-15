import { useEffect, useState } from "react";

export function PageMakerRunningTitle({
  valueSource,
  boardData,
  listenOnRender = false,
  onRenderFinish = () => {},
}) {
  useEffect(() => {
    listenOnRender && onRenderFinish();
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pb-[25%]">
      <h1 className="text-3xl font-bold w-full text-center">
        {valueSource.title}
      </h1>
      <h3 className="text-xl font-bold w-full text-center">
        {valueSource.subtitle}
      </h3>
    </div>
  );
}
