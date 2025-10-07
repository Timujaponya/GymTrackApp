import { useState, useCallback } from "react";
import api from "../api/client";

export default function useCrud(endpoint) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(endpoint);
      setItems(res.data?.data ?? []);
    } catch (err) {
      setError(err.message || "Veri alınamadı");
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const create = useCallback(async (payload) => {
    const res = await api.post(`${endpoint}/add`, payload);
    return res.data?.data ?? res.data;
  }, [endpoint]);

  const update = useCallback(async (id, payload) => {
    const res = await api.put(`${endpoint}/${id}`, payload);
    return res.data?.data ?? res.data;
  }, [endpoint]);

  const remove = useCallback(async (id) => {
    await api.delete(`${endpoint}/${id}`);
    return true;
  }, [endpoint]);

  return { items, setItems, loading, error, fetchAll, create, update, remove };
}