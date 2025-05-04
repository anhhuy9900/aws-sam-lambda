import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    console.log("🚀 ---------------------------------------------------------------------🚀");
    console.log("🚀 ~ file: S3ToSnsHandleEvents ~ Handler= ~ event:", JSON.stringify(event));
    console.log("🚀 ~ file: S3ToSnsHandleEvents ~ Handler= ~ context:", JSON.stringify(context));
    console.log("🚀 ---------------------------------------------------------------------🚀");

    try {
        return "Invoke S3 to SNS topic to Lambda"; 
    } catch (err) {
        console.error('S3ToSnsHandleEvents - ERROR: ', err);
    }
};
