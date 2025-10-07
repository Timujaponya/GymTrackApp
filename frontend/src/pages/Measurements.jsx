import EntityPage from "../components/EntityPage";

const config = {
  endpoint: "/measurements",
  title: "Ölçümler",
  singular: "Ölçüm", // eklendi
  searchFields: [],
  fields: [
    { name: "user", label: "Kullanıcı ID", type: "text", required: true },
    { name: "measurementDate", label: "Ölçüm Tarihi", type: "datetime-local" },
    { name: "weightKg", label: "Ağırlık (kg)", type: "number", placeholder: "75.5" },
    { name: "waistCm", label: "Bel Ölçüsü (cm)", type: "number", placeholder: "85" },
    { name: "bodyFatPct", label: "Vücut Yağ Oranı (%)", type: "number", placeholder: "15.2" }
  ],
  cardRenderer: (measurement) => (
    <>
      <h3>Ölçüm</h3>
      <div className="measurement-stats">
        {measurement.weightKg && <span>⚖️ {measurement.weightKg} kg</span>}
        {measurement.waistCm && <span>📏 {measurement.waistCm} cm</span>}
        {measurement.bodyFatPct && <span>📊 %{measurement.bodyFatPct}</span>}
      </div>
      <small>{new Date(measurement.measurementDate).toLocaleDateString('tr-TR')}</small>
    </>
  )
};

export default function Measurements() {
  return <EntityPage config={config} />;
}