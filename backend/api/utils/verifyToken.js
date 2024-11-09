import jwt from "jsonwebtoken";
import {createError} from "../utils/error.js"

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!!!"))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err)  return next(createError(403, "Token is not valid!!!"))
        req.user = user;
        next();
    })
}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log("req.user:", req.user.id); // Check req.user content
        console.log("req.params.id:", req.params.id); // Check req.params.id

        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!!"));
        }
    });
};

export const verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, () => {
       //console.log("req.user:", req.user.id); // Check req.user content
       //console.log("admin", req.user.isAdmin); // Check req.params.id

        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized!!"))
        }
    })
}