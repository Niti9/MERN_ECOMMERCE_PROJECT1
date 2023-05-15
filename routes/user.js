import express from 'express';

//import from controller/user.js 
import {createUser,getAllUser,getUser,replaceUser,updateUser,deleteUser} from '../controller/user.js'

// Router method
const userRouter = express.Router()

// Model view controller hai
userRouter
    .post('/', createUser)
    .get('/', getAllUser)
    .get('/:id', getUser )
    .put('/:id', replaceUser)
    .patch('/:id', updateUser)
    .delete('/:id', deleteUser)

export default userRouter


