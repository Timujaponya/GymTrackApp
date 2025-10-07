// ...existing code...
import React, { useEffect, useRef } from 'react';

export default function Modal({ open, title, subtitle, children, onClose, actions }) {
  const modalRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement;

    // focus first meaningful element inside modal (skip header close button if possible)
    const getFocusable = () =>
      Array.from(
        modalRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        ) || []
      );

    const focusables = getFocusable().filter(el => !el.classList.contains('modal-close'));
    const toFocus = focusables.length ? focusables[0] : getFocusable()[0];
    toFocus?.focus?.();

    const onKey = (e) => {
      if (e.key === 'Escape') { onClose?.(); return; }

      if (e.key === 'Tab') {
        const nodes = getFocusable().filter(el => !el.classList.contains('modal-close'));
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      try { lastActiveRef.current?.focus?.(); } catch {}
    };
  }, [open]); // <-- DEPENDENCY: only `open`, not `onClose`

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal" onClick={(e) => e.stopPropagation()} ref={modalRef}>
        <div className="modal-header">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ margin: 0 }}>{title}</h3>
            {subtitle && <small style={{ color: 'var(--muted)', marginTop: 6 }}>{subtitle}</small>}
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          <div style={{ flex: 1 }} />
          {actions && actions.length > 0 ? (
            actions.map((a, idx) => (
              <button
                key={idx}
                type={a.type || 'button'}
                className={`btn ${a.variant === 'secondary' ? 'secondary' : ''}`}
                onClick={a.onClick}
              >
                {a.label}
              </button>
            ))
          ) : (
            <>
              <button className="btn secondary" onClick={onClose} type="button">İptal</button>
              <button className="btn" onClick={() => {
                const frm = modalRef.current.querySelector('form');
                if (frm) frm.requestSubmit?.();
              }} type="button">Kaydet</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
// ...existing code...