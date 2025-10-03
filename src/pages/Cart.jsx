import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-2xl mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.title} - ${item.price}</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="mt-4 font-bold">Total: ${total}</p>
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white px-3 py-1 rounded mt-2"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
