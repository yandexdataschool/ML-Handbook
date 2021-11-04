import * as Styles from './Details.styles';

export const Details = ({ children }) => {
  return <Styles.Details>{children}</Styles.Details>;
};


// import React from 'react';

// import * as Styles from './Details.styles';

// export type SummaryProps = {
//   label: string;
//   children: React.ReactNode;
// }

// export const Details = ({ label, children }: SummaryProps) => {
//   return (
//     <Styles.Details>
//       <Styles.Summary>{label}</Styles.Summary>
//       <Styles.Content>{children}</Styles.Content>
//     </Styles.Details>
//   );
// };

