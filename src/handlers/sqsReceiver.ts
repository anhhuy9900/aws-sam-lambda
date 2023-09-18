import { Handler, SQSEvent } from 'aws-lambda';
import AWS from 'aws-sdk';

export const handler: Handler = async (event: SQSEvent) => {
    try {
        console.log("🚀 ------------------------------------------------------🚀");
        console.log("sqsReceiver - event -->  ", JSON.stringify(event));
        console.log("🚀 ------------------------------------------------------🚀");
        
    } catch (err) {
        console.error('sqsReceiver - ERROR: ', err);
    }
};
