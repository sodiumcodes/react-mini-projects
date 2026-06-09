import jwt from 'jsonwebtoken';
import asyncHandler from './ayncHandler';

const verifyRefreshToken = (token)=>{
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
}
const 