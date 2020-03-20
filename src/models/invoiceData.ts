import mongoose, { Schema } from 'mongoose';

const invoice: Schema = new Schema({
    userEmail:{type:String,required:true},
  companyname: { type: String, required: true  },
  companyaddress: { type: String, required: true },
  invoicenumber:{type:Number,required:true, unique:true},
  date:{type:String,required:true},
  customername:{type:String,required:true},
  customeraddress:{type:String,required:true},
  productname:{type:String,required:true},
  amount:{type:Number,required:true},
  quantity:{type:Number,required:true},
  totalamount:{type:Number,required:true},
  imageurl:{type:String,required:true}
 // productname:{type:String,required:true}
});
const Invoice=mongoose.model('Invoice',invoice);
export default Invoice;