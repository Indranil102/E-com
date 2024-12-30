import Layout from "../../component/Layout/Layout";

const Cart = () => {
  return (
    <Layout>
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {/* Add cart items here */}
        <p>Cart is empty.</p>
      </div>
    </Layout>
  );
};

export default Cart;
