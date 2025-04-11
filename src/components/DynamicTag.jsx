import React from "react";

// A component that accepts a `tagName` prop
const DynamicTag = ({ tagName: Tag = "div", children, ...props }) => {
  return <Tag {...props}>{children}</Tag>;
};

export default DynamicTag;
