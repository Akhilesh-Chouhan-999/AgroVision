interface ErrorStateProps {
  message: string;
}

const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded">
      <p className="text-red-700 text-sm">{message}</p>
    </div>
  );
};

export default ErrorState;
