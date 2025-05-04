import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ResponseUtil } from '../../utils/response';

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
    console.log("🚀 ~ file: createProduct.ts:16 ~ handler ~ event:", JSON.stringify(event.body));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        const product = JSON.parse((event?.body) as any || {});

        return ResponseUtil({
            product
        });
    } catch (err) {
        console.error('createProduct- ERROR: ', JSON.stringify(err));
        return ResponseUtil('Some Error', 500);
    }
};
