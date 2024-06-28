export const ShopCard = ({ name, price, color, img }) => (
    <div className='shopCard' >
      <h3>{name}</h3>
      <div>{color}</div>
      <img className='productImg' src={img} alt={name}></img>
      <div>${price}</div>
      <button>Add to card</button>
    </div>
);