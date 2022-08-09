import mongoose from 'mongoose';
let schema = mongoose.Schema;

const userSchema = new schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true,
        unique:true,
    },
    password :{
        type: String,
        required:true,
        min : 6

    }
    //blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],

})
export default mongoose.model("User", userSchema);
// let User = mongoose.model('User',UserSchema)
//User is our collection name
// export default User;
