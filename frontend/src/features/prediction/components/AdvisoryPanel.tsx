interface Props {
  advisory: any;
}
import { AdvisoryPanel } from "/src/features/prediction/components/AdvisoryPanel";


const AdvisoryPanel = ({ advisory }: Props) => {
  if (!advisory) return null;

  const renderList = (title: string, items: string[]) =>
    items?.length ? (
      <div className="mt-3">
        <h4 className="font-semibold">{title}</h4>
        <ul className="list-disc pl-6">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ) : null;

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h3 className="text-lg font-bold mb-2">
        Advisory
      </h3>

      {renderList("Home Remedies", advisory.homeRemedies)}
      {renderList("Organic Methods", advisory.organic)}
      {renderList("Chemical Control (Last Resort)", advisory.chemical)}
    </div>
  );
};

export default AdvisoryPanel;
