import { useEffect, useState } from "react";

export function PageMakerSimpleTitle({
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
      <h1 className="text-6xl font-bold w-full text-center">
        {valueSource.title}
      </h1>
    </div>
  );
}
