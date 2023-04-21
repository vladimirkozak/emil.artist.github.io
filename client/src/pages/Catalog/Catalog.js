import Product from "./Product/Product";

const DUMMY_CATALOG = [
  { id: 'q1', title: 't-short', desc: 'loremrfrvr vgrfgrefge', price: '100$', img: 'C:\Users\vladimir\Downloads\v1xwm0kqomnb2d2wd2esey56gesqlgvv.jpg' },
  { id: 'q2', title: 'cup', desc: 'loremrfrvr vgrfgrefge', price: '20$', img: 'C:\Users\vladimir\Downloads\v1xwm0kqomnb2d2wd2esey56gesqlgvv.jpg' }
];

const Catalog = () => {
  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        {DUMMY_CATALOG.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
          />
        ))}
        {/* <li>
          <Link to='/catalog/1'>product 1</Link>
        </li>
        <li>
          <Link to='/catalog/2'>product 2</Link>
        </li>
        <li>
          <Link to='/catalog/3'>product 3</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Catalog;