export const ShopItem = ({ name, price, color, img }) => (
    <div className='shopItem'>
      <img className='productImg' src={img} alt={name}></img>
      <h3>{name}</h3>
      <div>{color}</div>
      <div>${price}</div>
      <button>Add to card</button>
    </div>
);