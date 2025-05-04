import { Handler } from 'aws-lambda';


export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ file: reviewProduct.ts:16 ~ handleS3Upload ~ event:", JSON.stringify(event));
    console.log("🚀 ~ file: reviewProduct.ts:16 ~ handleS3Upload ~ context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        return "Lambda handle S3 upload"; 
    } catch (err) {
        console.error('handleS3Upload - ERROR: ', err);
    }
};
