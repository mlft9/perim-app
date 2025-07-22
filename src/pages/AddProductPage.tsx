import { useState } from 'react';
import ProductForm from '../components/ProductForm';
import PageWrapper from '../components/PageWrapper';

export default function AddProductPage() {
  const [lastAdded, setLastAdded] = useState<{ name: string; expirationDate: string } | null>(null);

  const handleAdd = (product: { name: string; expirationDate: string }) => {
    const existing = localStorage.getItem('products');
    const list = existing ? JSON.parse(existing) : [];
    list.push(product);
    localStorage.setItem('products', JSON.stringify(list));
    setLastAdded(product);
  };

  return (
    <PageWrapper>
      <div>
        <h1>Ajouter un produit</h1>
        {lastAdded ? (
          <div className="card">
            <p>✅ <strong>{lastAdded.name}</strong> ajouté pour le {lastAdded.expirationDate}</p>
            <button onClick={() => setLastAdded(null)}>Ajouter un autre</button>
          </div>
        ) : (
          <ProductForm onAdd={handleAdd} />
        )}
      </div>
    </PageWrapper>
  );
}
