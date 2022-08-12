import { users } from "../../../usersData"

export default function (req, res){
    const {userId} = req.query
    console.log("userId=",userId);
    if(req.method === 'GET'){
        const user = users.find((user) => user.id === parseInt(userId))
        res.status(200).json({user})
    } else if(req.method === 'DELETE'){
        console.log("req.method=",req.method);
        const deleteUser = users.find((user) => user.id === parseInt(userId))
        const userIndex = users.findIndex((user) => user.id === parseInt(userId))
        users.splice(userIndex, 1)
        res.status(200).json(deleteUser)
    }
    console.log("req.method=",req.method);
    
}