import { useEffect, useState } from 'react';
import { formatDate, formatName, getProductIcon } from '../utils/format';
import PageWrapper from '../components/PageWrapper';

type Product = {
  name: string;
  expirationDate: string;
};

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  const handleDelete = (index: number) => {
    const confirmed = confirm('Supprimer ce produit ?');
    if (confirmed) {
      const newList = [...products];
      newList.splice(index, 1);
      setProducts(newList);
      localStorage.setItem('products', JSON.stringify(newList));
    }
  };

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        console.log('Notification permission:', permission);
      });
    }
  }, []);

  useEffect(() => {
    const today = new Date();
    const soon = new Date();
    soon.setDate(today.getDate() + 1);

    products.forEach((product) => {
      const date = new Date(product.expirationDate);
      const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      if (diff === 0 && Notification.permission === 'granted') {
        new Notification(`⚠️ ${product.name}`, {
          body: `Expire aujourd’hui (${product.expirationDate})`,
          icon: '/pwa-192x192.png',
        });
      }

      if (diff === 1 && Notification.permission === 'granted') {
        new Notification(`⏳ ${product.name}`, {
          body: `Expire demain (${product.expirationDate})`,
          icon: '/pwa-192x192.png',
        });
      }
    });
  }, [products]);


  return (
    <PageWrapper>
      <div>
        <h1>Produits enregistrés</h1>
        <ul>
          {[...products]
            .sort((a, b) => new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime())
            .map((p, i) => {
              const today = new Date();
              const exp = new Date(p.expirationDate);
              const diffDays = Math.ceil((exp.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
              let color = '#4caf50';
              if (diffDays < 0) color = '#f44336';
              else if (diffDays <= 3) color = '#ff9800';

              return (
                <li key={i} style={{ borderLeft: `4px solid ${color}` }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <strong>{getProductIcon(p.name)} {formatName(p.name)}</strong>
                    <span>{formatDate(p.expirationDate)}</span>
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                      {diffDays < 0
                        ? `Périmé depuis ${-diffDays} jour${-diffDays > 1 ? 's' : ''}`
                        : diffDays === 0
                          ? 'Expire aujourd’hui'
                          : diffDays === 1
                            ? 'Expire demain'
                            : `Expire dans ${diffDays} jours`}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(i)}
                    style={{ backgroundColor: '#ff4d4d', marginLeft: '1rem' }}
                  >
                    🗑️
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </PageWrapper>
  );
}
