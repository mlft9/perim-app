import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatDate, formatName, getProductIcon } from '../utils/format';
import PageWrapper from '../components/PageWrapper';

type Product = {
  name: string;
  expirationDate: string;
};

export default function CalendarPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  const handleDayClick = (value: Date) => {
    setSelectedDate(value);
  };

  const formattedSelected = selectedDate?.toISOString().split('T')[0];

  const filtered = products.filter((p) => p.expirationDate === formattedSelected);

  return (
    <PageWrapper>
    <div>
      <h1>📆 Calendrier</h1>
      <Calendar
        onClickDay={handleDayClick}
        tileContent={({ date }) => {
          const dayKey = date.toISOString().split('T')[0];
          const count = products.filter((p) => p.expirationDate === dayKey).length;
          return count > 0 ? <small>{count} 🔔</small> : null;
        }}
      />

      {selectedDate && (
        <div style={{ marginTop: '1rem' }}>
          <h2>Produits du {formatDate(formattedSelected!)}</h2>
          {filtered.length > 0 ? (
            <ul>
              {filtered.map((p, i) => (
                <li key={i}>
                  {getProductIcon(p.name)} {formatName(p.name)}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun produit pour cette date.</p>
          )}
        </div>
      )}
    </div>
    </PageWrapper>
  );
}
