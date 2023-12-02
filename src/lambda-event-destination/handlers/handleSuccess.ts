import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ file: handleSuccess.ts:16 ~ handler ~ event:", JSON.stringify(event));
    console.log("🚀 ~ file: handleSuccess.ts:16 ~ handler ~ context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        return "Lambda Handle success"; 
    } catch (err) {
        console.error('Handle Success - ERROR: ', err);
    }
};
