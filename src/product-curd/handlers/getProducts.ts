import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { faker } from '@faker-js/faker';
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
    console.log("🚀 ~ file: getProducts.ts:16 ~ handler ~ event:", JSON.stringify(event));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        const products = Array.from({length: 20}, (v, k) => k + 1).map(el => ({
            id: el,
            name: `Product ${el}`, 
            description: `Product description ${el}`, 
            status: faker.datatype.boolean()
        }));

        return ResponseUtil(products);
    } catch (err) {
        console.error('getProduct- ERROR: ', err);
        return ResponseUtil('Some Error', 500);
    }
};
