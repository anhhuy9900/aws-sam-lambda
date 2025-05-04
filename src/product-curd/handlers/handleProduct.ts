import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ file: reviewProduct.ts:16 ~ handler ~ event:", JSON.stringify(event));
    console.log("🚀 ~ file: reviewProduct.ts:16 ~ handler ~ context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        return "Lambda Handle product"; 
    } catch (err) {
        console.error('Handle Product - ERROR: ', err);
    }
};
