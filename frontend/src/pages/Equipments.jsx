import EntityPage from "../components/EntityPage";

const config = {
  endpoint: "/equipments",
  title: "Ekipmanlar",
  singular: "Ekipman", // eklendi
  searchFields: ["name"],
  fields: [
    { name: "name", label: "Ekipman Adı", type: "text", required: true, placeholder: "Barbell, Dumbbell..." },
    { name: "notes", label: "Notlar", type: "textarea", rows: 3, placeholder: "Ekipman hakkında notlar" }
  ],
  cardRenderer: (equipment) => (
    <>
      <h3>{equipment.name}</h3>
      <p>{equipment.notes}</p>
    </>
  )
};

export default function Equipments() {
  return <EntityPage config={config} />;
}