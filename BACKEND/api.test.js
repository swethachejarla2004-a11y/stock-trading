const request = require('supertest');
const express = require('express');

// Create a test version of the app
const app = express();
app.use(express.json());

// Copy the stocks array and route from your main app
const stocks = [
  { name: "INFY", price: 1555.45, percent: "-1.60%", isDown: true },
  { name: "TCS", price: 3194.80, percent: "-0.25%", isDown: true },
  { name: "RELIANCE", price: 2112.40, percent: "1.44%", isDown: false }
];

app.get('/allStocks', (req, res) => {
    const liveStocks = stocks.map(stock => {
        const fluctuation = (Math.random() - 0.5) * 2;
        const change = stock.price * (fluctuation / 100);
        const newPrice = stock.price + change;
        const isDown = change < 0;
        
        return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            isDown: isDown,
            percent: (isDown ? "" : "+") + fluctuation.toFixed(2) + "%"
        };
    });
    res.json(liveStocks);
});

describe('Stock API Tests', () => {
  test('GET /allStocks should return 200 status', async () => {
    const response = await request(app).get('/allStocks');
    expect(response.statusCode).toBe(200);
  });

  test('GET /allStocks should return an array', async () => {
    const response = await request(app).get('/allStocks');
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /allStocks should return stocks with required fields', async () => {
    const response = await request(app).get('/allStocks');
    const firstStock = response.body[0];
    
    expect(firstStock).toHaveProperty('name');
    expect(firstStock).toHaveProperty('price');
    expect(firstStock).toHaveProperty('percent');
    expect(firstStock).toHaveProperty('isDown');
  });

  test('GET /allStocks should return numeric prices', async () => {
    const response = await request(app).get('/allStocks');
    const firstStock = response.body[0];
    
    expect(typeof firstStock.price).toBe('number');
  });

  test('GET /allStocks should return boolean for isDown', async () => {
    const response = await request(app).get('/allStocks');
    const firstStock = response.body[0];
    
    expect(typeof firstStock.isDown).toBe('boolean');
  });

  test('GET /allStocks should return at least 3 stocks', async () => {
    const response = await request(app).get('/allStocks');
    expect(response.body.length).toBeGreaterThanOrEqual(3);
  });
});
