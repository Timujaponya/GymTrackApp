import React, { useState, useEffect } from "react";
import EntityPage from "../components/EntityPage";
import api from "../api/client";

export default function Exercises() {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [equipments, setEquipments] = useState([]);
  
  // Muscle groups ve equipments'ı API'den çek
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [mgRes, eqRes] = await Promise.all([
          api.get("/muscle-groups"),
          api.get("/equipments")
        ]);
        setMuscleGroups(mgRes.data?.data || []);
        setEquipments(eqRes.data?.data || []);
      } catch (err) {
        console.error("Failed to load options:", err);
      }
    };
    
    fetchOptions();
  }, []);

  const config = {
    endpoint: "/exercises",
    title: "Egzersizler",
    singular: "Egzersiz",
    searchFields: ["name"],
    fields: [
      { 
        name: "name", 
        label: "Egzersiz Adı", 
        type: "text", 
        required: true, 
        placeholder: "Squat, Bench Press..." 
      },
      { 
        name: "description", 
        label: "Açıklama", 
        type: "textarea", 
        rows: 4, 
        placeholder: "Egzersiz hakkında detaylar" 
      },
      {
        name: "muscleGroups",
        label: "Kas Grupları",
        type: "multiselect", // yeni field type
        options: muscleGroups.map(mg => ({
          value: mg._id,
          label: mg.name
        })),
        placeholder: "Kas gruplarını seçin..."
      },
      {
        name: "equipment", 
        label: "Ekipmanlar",
        type: "multiselect", // yeni field type
        options: equipments.map(eq => ({
          value: eq._id,
          label: eq.name
        })),
        placeholder: "Ekipmanları seçin..."
      },
      { 
        name: "isActive", 
        label: "Aktif", 
        type: "checkbox" 
      }
    ],
    cardRenderer: (exercise) => (
      <>
        <h3>{exercise.name}</h3>
        <p>{exercise.description}</p>
        <div className="exercise-meta">
          {exercise.muscleGroups && exercise.muscleGroups.length > 0 && (
            <div className="meta-tags">
              <strong>Kas Grupları:</strong>
              {exercise.muscleGroups.map((mg, idx) => (
                <span key={idx} className="tag muscle-group">{mg.name || mg}</span>
              ))}
            </div>
          )}
          {exercise.equipment && exercise.equipment.length > 0 && (
            <div className="meta-tags">
              <strong>Ekipmanlar:</strong>
              {exercise.equipment.map((eq, idx) => (
                <span key={idx} className="tag equipment">{eq.name || eq}</span>
              ))}
            </div>
          )}
        </div>
        <div className={`status ${exercise.isActive ? 'active' : 'inactive'}`}>
          {exercise.isActive ? '✅ Aktif' : '❌ Pasif'}
        </div>
      </>
    )
  };

  return <EntityPage config={config} />;
}