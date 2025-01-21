const express = require('express');
const app = express();
const { findOne } = require('./Model/userModel');
const itemsModel = require('./Model/userModel');
const connectDB = require('./Config/db');

connectDB();
app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello");
});

app.post('/Create', async (req,res)=>{
    try{
        const {Tasks, Products} = req.body;
        const itemValid = await itemsModel.findOne(req.body);
        if(!itemValid){
            const createItem = new itemsModel({Tasks, Products});
            await createItem.save();
            res.send({message: "Item created successfully"});
        }
        res.send({message: "Item already exist"});
        
    } catch(err){
        console.log("Connection error", err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const itemDelete = await itemsModel.findOneAndDelete(id);
    if (itemDelete) {
      res.send({ message: "Item Deleted Successfully" });
    } else {
      res.send({ message: "Item not exist" });
    }
  });

  app.put("/update/:id", async (req, res) => {
    const oldItemId = req.params.id;
    const updatedItemId = req.body;
    const itemUpdate = await itemsModel.findByIdAndUpdate({ _id: oldItemId }, updatedItemId,{ new: true });
    if (itemUpdate) {
      res.send({ message: "Item Updated Successfully" });
    } else {
      res.send({ message: "Item not updated Successfully" });
    }
  });

app.listen(3000,()=>{
    console.log("Server is running...");
})