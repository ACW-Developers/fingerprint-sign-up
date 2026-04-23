/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white overflow-hidden" ref={ref}>
      <div className="h-full overflow-y-auto">{props.children}</div>
      <p className="text-xs text-end text-black pb-2 pr-3">
        Page: {props.number}
      </p>
    </div>
  );
});
Page.displayName = "Page";
export default Page;