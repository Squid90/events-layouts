import { ShopCard } from './ShopCard';

export const CardsView = ({ products }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {products.map((product, index) => (
        <ShopCard key={index} name={product.name} color={product.color} img={product.img} price={product.price} />
      ))}
    </div>
);