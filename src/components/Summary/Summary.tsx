import React from 'react';

interface SummaryProps {
  label: string;
  children: React.ReactNode;
}

const Summary = ({ label, children }: SummaryProps) => {
  return (
    <details>
      <summary>{label}</summary>
      {children}
    </details>
  );
};

export default Summary;
