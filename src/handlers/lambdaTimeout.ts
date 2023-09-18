import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ---------------------------------------------------------------------🚀");
    console.log("🚀 ~ file: lambdaTimeout.ts:4 ~ Handler= ~ event:", JSON.stringify(event));
    console.log("🚀 ---------------------------------------------------------------------🚀");

    try {
        for (let i = 0; i<=1000000000; i++) {
            
        }
        return "Testing Lambda Timeout"; 
    } catch (err) {
        console.error('lambdaTimeout - ERROR: ', err);
    }
};
