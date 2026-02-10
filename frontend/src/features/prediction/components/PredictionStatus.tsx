const PredictionStatus = ({ status }: { status: string }) => {
  const color =
    status === "COMPLETED"
      ? "text-green-700"
      : status === "FAILED"
      ? "text-red-600"
      : "text-yellow-600";

  return (
    <p className={`font-semibold ${color}`}>
      Status: {status}
    </p>
  );
};

export default PredictionStatus;
