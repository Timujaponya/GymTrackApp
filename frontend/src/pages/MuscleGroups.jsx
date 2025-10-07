import EntityPage from "../components/EntityPage";

const config = {
  endpoint: "/muscle-groups",
  title: "Kas Grupları",
  singular: "Kas Grubu", // eklendi
  searchFields: ["name"],
  fields: [
    { name: "name", label: "Kas Grubu Adı", type: "text", required: true, placeholder: "Göğüs, Sırt, Bacak..." },
    { name: "description", label: "Açıklama", type: "textarea", rows: 3, placeholder: "Kas grubu hakkında bilgi" }
  ],
  cardRenderer: (muscleGroup) => (
    <>
      <h3>{muscleGroup.name}</h3>
      <p>{muscleGroup.description}</p>
    </>
  )
};

export default function MuscleGroups() {
  return <EntityPage config={config} />;
}