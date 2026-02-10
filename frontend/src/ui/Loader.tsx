const Loader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700"></div>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default Loader;
