import { Handler } from 'aws-lambda';
import { ResponseUtil } from '../../utils/response';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ PATTERN-3 - Lambda Authorizer - handler -> event:", JSON.stringify(event));
    console.log("🚀 ~ PATTERN-3 - Lambda Authorizer -  handler -> context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {
        const token = event['authorizationToken'];
        console.log("🚀 ~ PATTERN-3 - Lambda Authorizer - token:", token);
        return ResponseUtil('PATTERN 3 - Lambda Authorizer'); 
    } catch (err) {
        console.error('PATTERN-3 - Lambda Authorizer - ERROR: ', err);
    }
};
