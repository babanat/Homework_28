import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const renderWithCatch = (child) => {
    try {
      return child;
    } catch (error) {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
      return null;
    }
  };

  if (hasError) {
    return <h2>Something went wrong.</h2>;
  }

  return <>{React.Children.map(children, renderWithCatch)}</>;
};

export default ErrorBoundary;
