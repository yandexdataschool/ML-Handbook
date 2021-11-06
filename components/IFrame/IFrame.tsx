import React from "react";
const INTERACTIVE_FOLDER = "interactive";

export const IFrame = ({ src }) => {
  const [height, setHeight] = React.useState(500);
  const ref = React.useRef(null);

  function getAndSetScrollHeight() {
    const scrollHeight = ref.current.contentWindow.document.body.scrollHeight;
    setHeight(scrollHeight);

    return scrollHeight;
  }

  React.useEffect(() => {
    setHeight(getAndSetScrollHeight);
  }, [height]);

  return (
    <iframe
      ref={ref}
      className="w-full my-5"
      scrolling="no"
      onLoad={getAndSetScrollHeight}
      height={height}
      src={`/${INTERACTIVE_FOLDER}${src.slice(1)}`}
      frameBorder="0"
    />
  );
};
