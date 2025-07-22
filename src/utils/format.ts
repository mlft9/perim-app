export function formatName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export function getProductIcon(name: string): string {
  const lower = name.toLowerCase();

  // 🥬 Légumes
  if (lower.includes('salade') || lower.includes('laitue') || lower.includes('épinard'))
    return '🥬';
  if (lower.includes('tomate'))
    return '🍅';
  if (lower.includes('carotte'))
    return '🥕';
  if (lower.includes('pomme de terre') || lower.includes('patate') || lower.includes('tubercule'))
    return '🥔';
  if (lower.includes('concombre'))
    return '🥒';
  if (lower.includes('brocoli'))
    return '🥦';
  if (lower.includes('champignon'))
    return '🍄';

  // 🍎 Fruits
  if (lower.includes('pomme'))
    return '🍎';
  if (lower.includes('banane'))
    return '🍌';
  if (lower.includes('fraise'))
    return '🍓';
  if (lower.includes('raisin'))
    return '🍇';
  if (lower.includes('orange'))
    return '🍊';
  if (lower.includes('citron'))
    return '🍋';
  if (lower.includes('fruit'))
    return '🍏';

  // 🧀 Produits laitiers
  if (lower.includes('fromage'))
    return '🧀';
  if (lower.includes('lait'))
    return '🥛';
  if (lower.includes('yaourt') || lower.includes('yogourt'))
    return '🍶';

  // 🥩 Viandes et charcuterie
  if (lower.includes('viande') || lower.includes('steak') || lower.includes('jambon') || lower.includes('poulet') || lower.includes('bœuf'))
    return '🥩';
  if (lower.includes('saucisse') || lower.includes('charcuterie'))
    return '🌭';

  // 🐟 Poissons
  if (lower.includes('poisson') || lower.includes('thon') || lower.includes('saumon') || lower.includes('crevette') || lower.includes('fruit de mer'))
    return '🐟';

  // 🍞 Boulangerie / sucré
  if (lower.includes('pain'))
    return '🍞';
  if (lower.includes('biscuit'))
    return '🍪';
  if (lower.includes('gâteau') || lower.includes('tarte'))
    return '🍰';
  if (lower.includes('brioche') || lower.includes('viennoiserie'))
    return '🥐';
  if (lower.includes('chocolat'))
    return '🍫';

  // 🥤 Boissons
  if (lower.includes('boisson') || lower.includes('jus') || lower.includes('soda') || lower.includes('eau'))
    return '🥤';
  if (lower.includes('café'))
    return '☕';
  if (lower.includes('thé'))
    return '🍵';

  // 🍳 Divers
  if (lower.includes('œuf') || lower.includes('oeuf'))
    return '🥚';
  if (lower.includes('pizza'))
    return '🍕';
  if (lower.includes('riz'))
    return '🍚';
  if (lower.includes('pâtes'))
    return '🍝';

  return '📦'; // par défaut
}

