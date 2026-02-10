const EmptyState = ({ message }: { message: string }) => {
  return (
    <div className="text-center text-gray-500 p-6">
      {message}
    </div>
  );
};

export default EmptyState;
