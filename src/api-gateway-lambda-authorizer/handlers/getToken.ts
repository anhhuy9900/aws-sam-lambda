import { Handler } from 'aws-lambda';
import jwt from 'jsonwebtoken';
import { ResponseUtil } from '../../utils/response';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ PATTERN-3 - LAMBDA API-GATEWAY - GET TOKEN -> event:", JSON.stringify(event));
    console.log("🚀 ~ PATTERN-3 - LAMBDA API-GATEWAY - GET TOKEN -> JWT_SECRET:", JSON.stringify(process.env.JWT_SECRET));
    console.log("🚀 ------------------------------------------------------🚀");

    try {
        const expiredTime = Math.floor(Date.now() / 1000) + (60 * 60);
        const token =  jwt.sign({
            exp: expiredTime,
            data: {
                name: 'test',
                expiredTime
            }
          }, 'zozvr7NsMc59TazF3m7WaH22ksvnnzD7');
        return ResponseUtil({
            token
        }); 
    } catch (err) {
        console.error('PATTERN-3 - API-GATEWAY GET TOKEN - ERROR: ', err);
    }
};
