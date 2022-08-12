import { users } from "../../../usersData"

export default function (req, res){
    const {userId} = req.query
    if(req.method === 'GET'){
        const user = users.find((user) => user.id === parseInt(userId))
        res.status(200).json({user})
    } else if(req.method === 'Delete'){
        const deleteUser = users.find((user) => user.id === parseInt(userId))
        const userIndex = users.findIndex((user) => user.id === parseInt(userId))
        users.splice(userIndex, 1)
        res.status(200).json(deleteUser)
    }
    
}