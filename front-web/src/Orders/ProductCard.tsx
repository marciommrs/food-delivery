import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
  product: Product;
  onSelectedProduct: (product: Product) => void;
  isSelected: boolean;
};

const ProductCard: React.FC<Props> = ({
  product,
  onSelectedProduct,
  isSelected,
}: Props) => {
  return (
    <div
      className={`order-card-container ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectedProduct(product)}
      role="presentation"
    >
      <h3 className="order-card-title">{product.name}</h3>
      <img src={product.imageUri} alt="Pizza" className="order-card-image" />
      <h3 className="order-card-price">{formatPrice(product.price)}</h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
