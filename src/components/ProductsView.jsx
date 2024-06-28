import { CardsView } from './CardsView';
import { ListView } from './ListView';

export const ProductsView = ({ products, viewType }) => {
    return (
      <div>
        {viewType === 'list' ? <ListView products={products} /> : <CardsView products={products} />}
      </div>
    );
};