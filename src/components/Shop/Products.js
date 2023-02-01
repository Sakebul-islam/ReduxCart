import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    discription: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    discription: 'The Second book I ever wrote',
  },
  {
    id: 'p3',
    price: 7,
    title: 'My Third Book',
    discription: 'The Third book I ever wrote',
  },
  {
    id: 'p4',
    price: 5,
    title: 'My Forth Book',
    discription: 'The Forth book I ever wrote',
  },
  {
    id: 'p5',
    price: 8,
    title: 'My Fifth Book',
    discription: 'The Fifth book I ever wrote',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.discription}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
