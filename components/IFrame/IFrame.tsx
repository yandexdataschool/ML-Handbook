const INTERACTIVE_FOLDER = "interactive";

export const IFrame = ({ src }) => {
  return <iframe src={`/${INTERACTIVE_FOLDER}${src.slice(1)}`} frameBorder="0" />;
};
