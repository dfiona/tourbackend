class Userservices{

static testserviceFunction(req){


req.body.names = req.body.names.toUpperCase();
const{number1,number2} =req.body;
const sum = number1+number2
req.body.sum = sum;


return req.body;
}

}

export default Userservices;