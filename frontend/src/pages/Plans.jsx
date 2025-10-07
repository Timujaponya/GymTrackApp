import EntityPage from "../components/EntityPage";

const config = {
  endpoint: "/plans",
  title: "Planlar",
  singular: "Plan", // eklendi
  searchFields: ["title"],
  fields: [
    { name: "user", label: "Kullanıcı ID", type: "text", required: true, placeholder: "Kullanıcı ID'sini girin" },
    { name: "title", label: "Plan Başlığı", type: "text", required: true, placeholder: "Plan adını girin" },
    { name: "isActive", label: "Aktif", type: "checkbox" }
  ],
  cardRenderer: (plan) => (
    <>
      <h3>{plan.title}</h3>
      <div className={`status ${plan.isActive ? 'active' : 'inactive'}`}>
        {plan.isActive ? '✅ Aktif' : '❌ Pasif'}
      </div>
    </>
  )
};

export default function Plans() {
  return <EntityPage config={config} />;
}