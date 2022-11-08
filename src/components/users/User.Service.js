const validates = require("../../utils/server/Validate")
const UserModel = require("./User.Model")

const createError = require(`http-errors`)
const UserService = (email,password,phone,address,name) => {
    const user =UserModel.create({
        email:email,
        password:password,
        phone:phone,
        address:address,
        name:name
    })
    const {error} = validates(user)
    if(error){
        createError(error.details[0].message)
    }
    if(user){
        createError(401)
    }
    const isExist = UserModel.find({ 
        email: email
    }, (err, docs) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(docs.length === 0){
             console.log("message")
         } else{
           console.log(`docs`,docs);
         }
       }
    });
    console.log(`isExist`,isExist);
    return user
}
module.exports = UserService
