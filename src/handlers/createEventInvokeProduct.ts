import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ResponseUtil } from '../utils/response';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
  

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ file: createEventInvokeProduct ~ handler ~ event:", JSON.stringify(event.body));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        const body: any = event?.body || null;
        const product = JSON.parse(body);
        if (!body) {
            throw new Error('No body');
        }

        return ResponseUtil(product);
    } catch (err) {
        console.error('createEventInvokeProduct - ERROR: ', JSON.stringify(err));
        throw new Error('The lambda has error');
    }
};
