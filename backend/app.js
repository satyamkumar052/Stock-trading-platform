require('dotenv').config({ quiet: true });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

// User Authentication
const cookieParser = require('cookie-parser');
const authRoute = require("./Routes/AuthRoute");
// User Authentication

const { HoldingModel } = require('./models/HoldingModel');
const { PositionModel } = require('./models/PosititonModel');
const { OrderModel } = require('./models/OrderModel');

const PORT = process.env.PORT || "3000";
const uri = process.env.MONGO_URL;

app.use(cors({
    origin: ["http://localhost:3002", "http://localhost:3001", "http://localhost:3000"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyparser.json());
app.use("/", authRoute);


app.get("/allOrders", async(req,res)=>{
    let allOrders = await OrderModel.find({});
    res.json(allOrders);
})

app.get("/allHoldings", async(req, res)=>{
    let allHoldings = await HoldingModel.find({});;
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res)=>{
    let allPositions = await PositionModel.find({});;
    res.json(allPositions);
});

app.get("/getQty/:name", async(req,res)=>{
    const stockname = req.params.name;

    const orders = await OrderModel.find({name:stockname});
    let totalQty = 0;
    orders.forEach(order => {
        if (order.mode === "BUY") {
            totalQty += order.qty;
        } else if (order.mode === "SELL") {
            totalQty -= order.qty;
        }
    });
    res.json({ qty:totalQty });
});

app.post("/newOrder", async(req, res)=>{
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();

    res.send("Order placed!");
});

app.get("/verify", (req, res) => {
  res.json({ status: true, user: "TestUser" });
});


app.get("/", (req,res)=>{
    res.send("Heyy!");
});

app.listen(PORT, ()=>{
    console.log("Request received");
    mongoose.connect(uri)
    .then(() => console.log('Connected!'))
    .catch(()=> console.log('not connected to db'));
});