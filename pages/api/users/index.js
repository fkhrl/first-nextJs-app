import { users } from '../../../usersData'
export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(users)
    } else if (req.method === 'POST') {
        const user = req.body
        const newUser = {
            id: Date.now(),
            created: new Date(),
            name: user
        };
        users.push(newUser)
        res.status(201).json(newUser)

    }

}