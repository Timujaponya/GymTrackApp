import React from "react";

export default function EntityCard({ item, config, onEdit, onDelete }) {
  const { cardRenderer } = config;
  
  return (
    <div className="entity-card">
      {cardRenderer ? (
        cardRenderer(item)
      ) : (
        <>
          <h3>{item.name || item.title || "Untitled"}</h3>
          <p>{item.description || item.email || ""}</p>
        </>
      )}
      
      <div className="card-actions">
        <button 
          onClick={() => onEdit(item)}
          className="btn btn-sm btn-secondary"
        >
          Düzenle
        </button>
        <button 
          onClick={() => onDelete(item._id)}
          className="btn btn-sm btn-danger"
        >
          Sil
        </button>
      </div>
    </div>
  );
}