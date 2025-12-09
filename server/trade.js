const express = require("express");
const router = express.Router();

// Simple in-memory order book and trades
const orders = []; // {id, type: 'buy'|'sell', symbol, price, qty, owner, status}
const trades = []; // executed trades
let orderId = 1;

// Place order
router.post("/order", (req, res) => {
  const { type, symbol, price, qty, owner } = req.body;
  if (!type || !symbol || !price || !qty)
    return res.status(400).json({ error: "Missing fields" });
  const order = {
    id: orderId++,
    type,
    symbol,
    price: Number(price),
    qty: Number(qty),
    owner: owner || "Anon",
    status: "open",
    createdAt: Date.now(),
  };
  orders.push(order);

  // Very simple matching: match opposite orders same symbol and price
  // For demo only
  const oppositeType = type === "buy" ? "sell" : "buy";
  for (let o of orders) {
    if (
      o.status === "open" &&
      o.type === oppositeType &&
      o.symbol === symbol &&
      o.price === order.price
    ) {
      // execute
      const qtyExecuted = Math.min(o.qty, order.qty);
      o.qty -= qtyExecuted;
      order.qty -= qtyExecuted;
      trades.push({
        id: trades.length + 1,
        symbol,
        price: order.price,
        qty: qtyExecuted,
        buy: type === "buy" ? order.owner : o.owner,
        sell: type === "sell" ? order.owner : o.owner,
        ts: Date.now(),
      });
      if (o.qty === 0) o.status = "filled";
      if (order.qty === 0) order.status = "filled";
      if (order.qty === 0) break;
    }
  }

  res.json({ order, trades: trades.slice().reverse() });
});

// Get orders
router.get("/orders", (req, res) => {
  res.json(orders.slice().reverse());
});

// Get trade history
router.get("/trades", (req, res) => {
  res.json(trades.slice().reverse());
});

module.exports = router;
