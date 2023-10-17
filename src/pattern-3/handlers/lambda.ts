import { Handler } from 'aws-lambda';
import { ResponseUtil } from '../../utils/response';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ PATTERN-3 - LAMBDA API-GATEWAY - handler -> event:", JSON.stringify(event));
    console.log("🚀 ~ PATTERN-3 - LAMBDA API-GATEWAY -  handler -> context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {
       
        return ResponseUtil('PATTERN 3 - Lambda received'); 
    } catch (err) {
        console.error('PATTERN-3 - API-GATEWAY Lambda Handler - ERROR: ', err);
    }
};
