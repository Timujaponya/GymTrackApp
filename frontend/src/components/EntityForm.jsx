import React from "react";

export default function EntityForm({ fields = [], initial = {}, onSubmit, loading = false }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    
    fields.forEach(field => {
      if (field.type === "multiselect") {
        // Multiselect için seçilen değerleri array olarak topla
        const selectedValues = Array.from(e.target.querySelectorAll(`select[name="${field.name}"] option:checked`))
          .map(option => option.value)
          .filter(value => value !== "");
        data[field.name] = selectedValues;
      } else {
        const value = formData.get(field.name);
        if (field.type === "checkbox") {
          data[field.name] = formData.has(field.name);
        } else if (field.type === "number") {
          data[field.name] = value ? Number(value) : null;
        } else {
          data[field.name] = value || "";
        }
      }
    });
    
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {fields.map((field) => {
          const value = initial[field.name] ?? "";
          
          if (field.type === "checkbox") {
            return (
              <label key={field.name} className="checkbox-label">
                <input 
                  type="checkbox" 
                  name={field.name}
                  defaultChecked={!!value}
                />
                <span>{field.label}</span>
              </label>
            );
          }
          
          if (field.type === "textarea") {
            return (
              <div key={field.name} className="form-field">
                <label>{field.label}</label>
                <textarea 
                  name={field.name}
                  defaultValue={value}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={field.rows || 3}
                />
              </div>
            );
          }
          
          if (field.type === "select") {
            return (
              <div key={field.name} className="form-field">
                <label>{field.label}</label>
                <select 
                  name={field.name}
                  defaultValue={value}
                  required={field.required}
                >
                  <option value="">Seçiniz...</option>
                  {(field.options || []).map((option) => (
                    <option key={option.value ?? option} value={option.value ?? option}>
                      {option.label ?? option}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
          
          if (field.type === "multiselect") {
            // Çoklu seçim için select multiple
            const selectedValues = Array.isArray(value) ? value.map(v => v._id || v) : [];
            
            return (
              <div key={field.name} className="form-field">
                <label>{field.label}</label>
                <select 
                  name={field.name}
                  multiple
                  defaultValue={selectedValues}
                  className="multiselect"
                  size={Math.min(field.options?.length || 4, 6)}
                >
                  {(field.options || []).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Ctrl/Cmd tuşuyla birden fazla seçim yapabilirsiniz
                </small>
              </div>
            );
          }
          
          return (
            <div key={field.name} className="form-field">
              <label>{field.label}</label>
              <input 
                type={field.type || "text"}
                name={field.name}
                defaultValue={value}
                required={field.required}
                placeholder={field.placeholder}
              />
            </div>
          );
        })}
        
        <div className="form-actions">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Kaydediliyor..." : "Kaydet"}
          </button>
        </div>
      </div>
    </form>
  );
}