import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shop Online</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            width: "200px"
          }}>
            <img 
              src={p.image} 
              alt="" 
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />

            <h3>{p.name}</h3>
            <p>💰 {p.price} VND</p>

            <button onClick={() => addToCart(p)}>
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

      <h2>🛍️ Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - {item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default App;