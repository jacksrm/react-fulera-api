import express, { Request, Response } from 'express';


import getUserData from 'src/utils/getUserData';

const route = express.Router();

route.post(
    '/login',
    async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const { users } = await getUserData();
        let success = false;
        console.log(users)
        users.map((user) => {
            if (user.email === email) {
                if (user.password === password) {
                    success = true;
                } else {
                    return res.json({ message: "Invalid Password!" }).status(400)
                }
            } else {
                return res.json({ message: "Invalid Email!" }).status(400)
            }
            return res.json({
                user: user.name.replace(/\s/g, ''),
                id: user.id
            }).status(200);

        })
    }
)
export default route;