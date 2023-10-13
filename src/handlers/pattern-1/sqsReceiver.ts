import { Handler, SQSEvent } from 'aws-lambda';
import AWS from 'aws-sdk';

export const handler: Handler = async (event: SQSEvent) => {
    try {
        console.log("🚀 ------------------------------------------------------🚀");
        console.log("PATTERN-1 - LAMBDA - sqsReceiver - event -->  ", JSON.stringify(event));
        console.log("🚀 ------------------------------------------------------🚀");
        
    } catch (err) {
        console.error('PATTERN-1 - LAMBDA - sqsReceiver - ERROR: ', err);
    }
};
