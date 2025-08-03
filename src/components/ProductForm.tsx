import { useState } from "react";

type Props = {
  onAdd: (product: { name: string; expirationDate: string }) => void;
};

export default function ProductForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const todayStr = new Date().toISOString().split("T")[0];

    if (!name.trim()) {
      setError("Le nom ne peut pas être vide.");
      return;
    }

    if (!expirationDate) {
      setError("Veuillez entrer une date.");
      return;
    }

    if (expirationDate < todayStr) {
      setError("La date ne peut pas être dans le passé.");
      return;
    }

    if (name.length > 100) {
      setError("Le nom est trop long.");
      return;
    }

    onAdd({ name: name.trim(), expirationDate });
    setName("");
    setExpirationDate("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
      <label htmlFor="product-name">
        Nom du produit :
        <small
          style={{ display: "block", marginBottom: "0.25rem", color: "#ccc" }}
        >
          Entrez le nom du produit que vous souhaitez ajouter
        </small>
        <input
          type="text"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label style={{ textAlign: "left" }}>
        Date de péremption :
        <small
          style={{ display: "block", marginBottom: "0.25rem", color: "#ccc" }}
        >
          Choisissez la date à laquelle le produit expire
        </small>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
          min={new Date().toISOString().split("T")[0]}
          style={{ display: "block" }}
        />
      </label>
      <button type="submit">Ajouter</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
