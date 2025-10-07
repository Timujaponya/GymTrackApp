import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import EntityForm from "./EntityForm";
import EntityCard from "./EntityCard";
import useCrud from "../hooks/useCrud";

export default function EntityPage({ config }) {
  const { endpoint, title, fields, cardRenderer, searchFields = [], singular } = config;
  const { items, loading, error, fetchAll, create, update, remove } = useCrud(endpoint);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // Use provided singular form or fallback to simple slice
  const singularTitle = singular || title.slice(0, -1);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const filteredItems = items.filter(item => {
    if (!searchTerm) return true;
    return searchFields.some(field => 
      item[field]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const openNew = () => {
    setEditing(null);
    setOpen(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    setOpen(true);
  };

  const handleSubmit = async (data) => {
    setFormLoading(true);
    try {
      if (editing) {
        await update(editing._id, data);
      } else {
        await create(data);
      }
      await fetchAll();
      setOpen(false);
      setEditing(null);
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Bu öğeyi silmek istediğinizden emin misiniz?")) return;
    
    try {
      await remove(id);
      await fetchAll();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (error) {
    return (
      <div className="container">
        <div className="error-state">
          <h2>Hata</h2>
          <p>{error}</p>
          <button onClick={fetchAll} className="btn">Tekrar Dene</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <div className="page-title-section">
          <h2 className="page-title">{title}</h2>
          <p className="page-subtitle">{items.length} öğe</p>
        </div>
        
        <div className="page-actions">
          {searchFields.length > 0 && (
            <div className="search-box">
              <input
                type="text"
                placeholder="Ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          )}
          
          <button onClick={openNew} className="btn btn-primary">
            <span>+ Yeni {singularTitle}</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Yükleniyor...</p>
        </div>
      ) : (
        <div className="entity-grid">
          {filteredItems.length === 0 ? (
            <div className="empty-state">
              <p>Henüz {title.toLowerCase()} eklenmemiş.</p>
              <button onClick={openNew} className="btn btn-ghost">
                İlk {singularTitle}ı Ekle
              </button>
            </div>
          ) : (
            filteredItems.map((item) => (
              <EntityCard
                key={item._id}
                item={item}
                config={{ cardRenderer }}
                onEdit={openEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      )}

      <Modal
        open={open}
        title={editing ? `${singularTitle} Düzenle` : `Yeni ${singularTitle}`}
        onClose={() => {
          setOpen(false);
          setEditing(null);
        }}
      >
        <EntityForm
          fields={fields}
          initial={editing || {}}
          onSubmit={handleSubmit}
          loading={formLoading}
        />
      </Modal>
    </div>
  );
}