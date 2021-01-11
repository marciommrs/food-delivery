import { checkIsSelected } from './helpers';
import ProductCard from './ProductCard';
import { Product } from './types';

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectedProduct: (product: Product) => void;
};

const ProductsList: React.FC<Props> = ({
  products,
  selectedProducts,
  onSelectedProduct,
}: Props) => (
  <div className="orders-list-container">
    <div className="orders-list-items">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectedProduct={onSelectedProduct}
          isSelected={checkIsSelected(selectedProducts, product)}
        />
      ))}
    </div>
  </div>
);

export default ProductsList;
