import React from "react";

import * as Styles from "./Summary.styles";

interface SummaryProps {
  label: string;
  children: React.ReactNode;
}

const Summary = ({ label, children }: SummaryProps) => {
  return (
    <Styles.Details>
      <Styles.Summary>{label}</Styles.Summary>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Details>
  );
};

export default Summary;
