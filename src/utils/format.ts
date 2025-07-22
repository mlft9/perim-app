export function formatName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export function getProductIcon(name: string): string {
  const lower = name.toLowerCase();

  if (lower.includes('tomate') || lower.includes('carotte') || lower.includes('salade') || lower.includes('légume'))
    return '🥬';
  if (lower.includes('pomme') || lower.includes('banane') || lower.includes('fruit'))
    return '🍎';
  if (lower.includes('lait') || lower.includes('fromage') || lower.includes('yaourt'))
    return '🧀';
  if (lower.includes('viande') || lower.includes('steak') || lower.includes('jambon') || lower.includes('poulet'))
    return '🥩';
  if (lower.includes('poisson') || lower.includes('thon') || lower.includes('saumon'))
    return '🐟';
  if (lower.includes('pain') || lower.includes('biscuit') || lower.includes('gâteau') || lower.includes('brioche')) 
    return '🍞';
  if (lower.includes('boisson') || lower.includes('jus') || lower.includes('eau'))
    return '🥤';

  return '📦'; // défaut
}
