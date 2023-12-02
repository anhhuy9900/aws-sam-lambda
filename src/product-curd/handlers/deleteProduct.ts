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

const productData: any = [{
    id: 1,
    name: `Product 1`, 
    description: `Product description 1`, 
    status: faker.datatype.boolean()
}]

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ file: deleteProduct.ts:16 ~ handler ~ event:", JSON.stringify(event));
    console.log("🚀 ~ file: deleteProduct.ts:16 ~ handler ~ event?.pathParameters?.id:", event?.pathParameters?.id);
    console.log("🚀 ------------------------------------------------------🚀");

    try {
        const id: any = event?.pathParameters?.id || 0;
        const product = productData.find((p: any) => p.id === parseInt(id))
        if (!product) {
            return ResponseUtil("No Data");
        }

        return ResponseUtil("Deleted Item successfully");
    } catch (err) {
        console.error('deleteProduct - ERROR: ', err);
        return ResponseUtil('Some Error', 500);
    }
};
