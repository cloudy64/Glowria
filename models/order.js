const orderSchema= new mongoose.Schema({
  id:Objectid,
  userid:Objectid,
  amount:number,   //total 300
  status:String, //pending
  orderItems:String, //availbe 
  createdAt:date  //date
})


module.exports=mongoose.model("order" , orderSchema);