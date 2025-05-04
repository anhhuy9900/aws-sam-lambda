import { Handler } from 'aws-lambda';
import { SNSService } from '../../services/sns.service';
import { ResponseUtil } from '../../utils/response';

const sns = new SNSService();

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ PATTERN-1 - LAMBDA API-GATEWAY - handler -> event:", JSON.stringify(event));
    console.log("🚀 ~ PATTERN-1 - LAMBDA API-GATEWAY -  handler -> context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {
        sns.snsTopic = process.env.SNS_TOPIC_ARN || '';
        console.log("🚀 ~ PATTERN-1 - LAMBDA API-GATEWAY - handler -> SNS_TOPIC_ARN:", process.env.SNS_TOPIC_ARN);
        console.log("🚀 ~ PATTERN-1 - LAMBDA API-GATEWAY - handler -> sns.snsTopic:", JSON.stringify(sns.snsTopic));
        await sns.publish({
            subject: 'Send-message-lambda-api-gateway-to-sns',
            message: JSON.stringify({
                type: 'pattern-1',
                body: event.body
            })
        });
        return ResponseUtil('Send SNS message success'); 
    } catch (err) {
        console.error('PATTERN-1 - API-GATEWAY Lambda Handler - ERROR: ', err);
    }
};
