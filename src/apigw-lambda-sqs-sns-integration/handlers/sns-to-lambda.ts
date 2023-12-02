import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ PATTERN-1 - SNS TO LAMBDA - handler -> event:", JSON.stringify(event));
    console.log("🚀 ~ PATTERN-1 - SNS TO LAMBDA -  handler -> context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        return "PATTERN-1 - SNS TO LAMBDA Handler"; 
    } catch (err) {
        console.error('PATTERN-1 - SNS TO LAMBDA Handler - ERROR: ', err);
    }
};
