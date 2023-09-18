import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { faker } from '@faker-js/faker';
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

const productData = [{
    id: 1,
    name: `Product 1`, 
    description: `Product description 1`, 
    status: faker.datatype.boolean()
}];

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ file: updateProduct.ts:16 ~ handler ~ event:", JSON.stringify(event.body));
    console.log("🚀 ------------------------------------------------------🚀");

    try {
        const id: any = event?.pathParameters?.id || 0;
        const product = productData.find((p: any) => p.id === parseInt(id))
        const nProduct = {
            ...product,
            ...(event?.body) as unknown as object
        };

        if (!product) {
            return ResponseUtil("No Data");
        }

        return ResponseUtil({
            data: nProduct
        });
    } catch (err) {
        console.error('updateProduct - ERROR: ', err);
        return ResponseUtil('Some Error', 500);
    }
};
