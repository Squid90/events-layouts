import React, { useState } from 'react';

const ShopItem = ({ name, price, color, img }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '100%', display: 'flex', justifyContent: 'space-between',}}>
    <h3>{name}</h3>
    <div>{color}</div>
    <img src={img} alt={name}></img>
    <div>${price}</div>
    <button>Add to card</button>
  </div>
);

const ShopCard = ({ name, price, color, img }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px'}}>
      <h3>{name}</h3>
      <div>{color}</div>
      <img src={img} alt={name}></img>
      <div>${price}</div>
      <button>Add to card</button>
    </div>
  );

const ListView = ({ products }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {products.map((product, index) => (
      <ShopItem key={index} name={product.name} price={product.price} />
    ))}
  </div>
);

const CardsView = ({ products }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
    {products.map((product, index) => (
      <ShopCard key={index} name={product.name} price={product.price} />
    ))}
  </div>
);

const ProductsView = ({ products, viewType }) => {
  return (
    <div>
      {viewType === 'list' ? <ListView products={products} /> : <CardsView products={products} />}
    </div>
  );
};

export const Store = () => {
  const initialProducts = [
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "../img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    },
    
  ];

  const [products, setProducts] = useState(initialProducts);
  const [viewType, setViewType] = useState('list');

  return (
    <div>
      <span className="material-icons" onClick={() => setViewType('list')}>view_list</span>
      <span className="material-icons" onClick={() => setViewType('grid')}>view_module</span>

      <ProductsView products={products} viewType={viewType} />
    </div>
  );
};

