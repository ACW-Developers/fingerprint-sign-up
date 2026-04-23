/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white overflow-hidden flex flex-col" ref={ref}>
      <div className="flex-1 overflow-y-auto">{props.children}</div>
      <p className="text-[10px] text-end text-black/60 pb-1 pr-2 shrink-0">
        {props.number}
      </p>
    </div>
  );
});
Page.displayName = "Page";
export default Page;