import { CustomErrorHandler } from "../../Error/Errorhandling.js";
class UserModel {
    constructor(id, name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }


    static registerUser(name,email,password){
        const verify = users.find((user) => user.email === email);
        if (verify) {
            console.log("already user exist!"); 
            next(new CustomErrorHandler("already user exist!", 409));
        }
    
        const newUser = new UserModel(users.length+1, name, email, password); // here am using Date.now() to ensure unique id
        users.push(newUser);
    }


    static loginUser(email,password){
        const verify = users.find((user)=>user.email === email && user.password === password);
        console.log(verify);
        if(verify){
            return {success:true,msg:"userlogin successfully!",user:verify}
        }
        return {success:false,msg:"unauthorized"}
    }

    
    static getAllUsers(){
        return users;
    }
}

export const users = [];
UserModel.registerUser("kethan","kethan09@gmail.com","123456")
UserModel.registerUser("sindhu","sindhu14@gmail.com","123456")

export default UserModel;

