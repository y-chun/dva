import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
    function query() {
        dispatch({
            type: 'products/query',
        });
    }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={query} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);