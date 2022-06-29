import Userservices from "../services/userservices";
class Usercontroller{


    static testcontroller(req,res){
        const test = Userservices.testserviceFunction(req);
         return res.status(200).json({
            message:"ok! Successfully",
            data: test

         })

    }
}
export default Usercontroller;