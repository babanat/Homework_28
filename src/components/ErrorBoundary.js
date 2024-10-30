import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <pre className="text-sm text-gray-700 bg-red-100 p-4 rounded-lg mb-4 border border-red-200">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
      >
        Try again
      </button>
    </div>
  );
}

function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

export default MyErrorBoundary;
