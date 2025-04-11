import React from "react";
import DynamicTag from "./DynamicTag";

const CustomComponent = ({ text, style, className }) => (
  <span style={style} className={className}>
    {text}
  </span>
);

const DynamicContent = () => (
  <>
    <div className="space-y-4">
      <DynamicTag tagName="h3" className="text-xl font-medium text-blue-500">
        Dynamic Heading
      </DynamicTag>
      <DynamicTag tagName="p" className="text-gray-600 dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        quibusdam pariatur veritatis voluptatum assumenda aliquam minima hic
        consectetur, suscipit sint dolore, corrupti praesentium sit, vel
        voluptas totam accusamus eveniet quaerat.
      </DynamicTag>
      <DynamicTag
        tagName={CustomComponent}
        text="Custom Component Rendered!"
        style={{ color: "#2b7fff" }}
        className="block"
      />
      <DynamicTag
        tagName="button"
        onClick={() => alert("Clicked!")}
        className="rounded px-5 py-2 text-sm/6 font-medium bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700"
      >
        Dynamic Button
      </DynamicTag>
    </div>
  </>
);

export default DynamicContent;
