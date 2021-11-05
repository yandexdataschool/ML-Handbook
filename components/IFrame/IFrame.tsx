import React from "react";
const INTERACTIVE_FOLDER = "interactive";

export const IFrame = ({ src }) => {
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight);
  }, []);

  return (
    <iframe
      ref={ref}
      className="w-full my-5"
      scrolling="no"
      height={height}
      src={`/${INTERACTIVE_FOLDER}${src.slice(1)}`}
      frameBorder="0"
    />
  );
};
