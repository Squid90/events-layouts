import { ShopItem } from './ShopItem';

export const ListView = ({ products }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product, index) => (
        <ShopItem key={index} img={product.img} name={product.name} color={product.color} price={product.price} />
      ))}
    </div>
);