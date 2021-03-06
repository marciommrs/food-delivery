import { Product } from './types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function checkIsSelected(selectedProducts: Product[], product: Product) {
  return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number): string {
  const formmatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formmatter.format(price);
}
