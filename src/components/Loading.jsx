import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 150 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="160" rx="5" ry="5" width="150" height="15" />
    <rect x="0" y="180" rx="5" ry="5" width="100" height="15" />
    <rect x="0" y="0" rx="5" ry="5" width="210" height="145" />
    <rect x="0" y="220" rx="5" ry="5" width="80" height="32" />
    <rect x="118" y="220" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
);

export default MyLoader;
