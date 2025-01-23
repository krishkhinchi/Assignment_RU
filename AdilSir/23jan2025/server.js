import express from 'express'
const app = express();
import connectDB from './config/db.js'
import User from './model/userSchema.js';
import bodyParser from 'body-parser'

connectDB()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("HEllo")
})

app.post('/register', async (req, res) => {
    const { email, name, password } = req.body

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.send({ message: "User Already Exist" })
        }
        const userData = await User({ email, name, password })
        userData.save();
        res.send({ message: "User Created Successfully" })
    }
    catch (err) {
        res.send(err)
    }

})


app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const userExist=await User.findOne({email})
        if(!userExist){
          return       res.send({message:"User Not Found"})
        }
        if(password===userExist.password){
            return res.send({message:"Login Successfully"})
        }
       res.send({message:"Invalid Credentials"})
    }
    catch(err){
        res.send(err)
    }
})

app.delete('/delete/:id',async (req,res)=>{
    const {id}=req.params

    try{
        const userExist=await User.findByIdAndDelete({_id:id})
        if(!userExist){
                return res.send({message:"User not found "})
        }

        res.send({message:"User Deleted Successfully "})
        
    }
    catch(err){
        res.send(err)
    }
})

app.put('/update/:id',async(req,res)=>{
    try{   
    const itemId = req.params.id
    const newId = req.body
    const userUpdated = await User.findByIdAndUpdated({_id: itemId},newId, {new: true})

    if(userUpdated) { return res.send({message:"user update successfully"})}
     res.send({message:"user not update"})
    }
    catch(err){
        res.send(err)
    }
})

app.listen(3000, (req, res) => {
    console.log("Server is running")
})