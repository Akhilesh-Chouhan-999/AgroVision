interface Props {
  disease: string;
  confidence: number;
  severity: string;
}

const DiseaseResultCard = ({
  disease,
  confidence,
  severity,
}: Props) => {
  const severityColor =
    severity === "HIGH"
      ? "bg-red-100 text-red-700"
      : severity === "MEDIUM"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <p>
        <strong>Disease:</strong> {disease}
      </p>

      <p>
        <strong>Confidence:</strong>{" "}
        {(confidence * 100).toFixed(1)}%
      </p>

      <span
        className={`inline-block mt-2 px-3 py-1 rounded ${severityColor}`}
      >
        Severity: {severity}
      </span>
    </div>
  );
};

export default DiseaseResultCard;
