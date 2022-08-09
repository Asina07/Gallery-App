import User from "../model/Schema";
//install -> npm i bcryptjs
//import bcrypt from 'bcryptjs';

//-----------------------Get Data--------------------------------------------------------

export  const getAllUserData = (req,res)=>{
    User.find().then(result=>{
        if(!result){
            res.status('404'.json({message:"data not get"}))
        }else{
            res.status(200).json({result})
        }
    }).catch(err=>console.log(err))
}
// export const getAllUserData = (req,res)=>{
//     User.find().then(result =>{
//         if(!result){
//             res.status('404').json({
//                 message:"cannot get result"
//             })

//         }else{
//             res.status('200').json({users:result})
//         }
//     }).catch(err=>console.log(err))
// }

//----------------------------- -->SignUp Post/add-------------------------------------------------
export const signup = async (req,res,next)=>{
    const {name, email, password } = req.body;
    
    let existingUser;
    try{
        existingUser =  await User.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"user Already Exists! login Instead"})
    }

    //-------------------------------add new data-------------------------
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password,  // :hashedPassword,
        blogs:[],
    });
    
    try{
         await user.save();

    }catch(err){
        return console.log(err)
    }
    return res.status("201").json({user})
}


//-----------------------------------Login Post-----------------------
export const login = async(req,res,next)=>{
    const { email, password } = req.body;
    let existingUser;
    try{
        existingUser =  await User.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(!existingUser){
       
        return res.status("404").json({message:"Couldn't find user by Email"})
    }

// const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
// if(!isPasswordCorrect){
//     return res.status(400).json({message:"Incorrect Password"})
// }
// return res.status(200).json({message:"Login Successfull"})


}