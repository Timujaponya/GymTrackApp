import EntityPage from "../components/EntityPage";

const config = {
  endpoint: "/users",
  title: "Kullanıcılar",
  singular: "Kullanıcı", // eklendi
  searchFields: ["name", "email"],
  fields: [
    { name: "name", label: "Ad Soyad", type: "text", required: true },
    { name: "email", label: "E-posta", type: "email", required: true },
    { name: "passwordHash", label: "Şifre", type: "password" },
    { name: "heightCm", label: "Boy (cm)", type: "number" },
    { name: "birthDate", label: "Doğum Tarihi", type: "date" }
  ],
  cardRenderer: (user) => (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {user.heightCm && <small>{user.heightCm} cm</small>}
    </>
  )
};

export default function Users() {
  return <EntityPage config={config} />;
}