import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { faker } from '@faker-js/faker';
import { ResponseUtil } from '../utils/response';
import AWS from 'aws-sdk';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

const lambda = new AWS.Lambda({
    apiVersion: '2015-03-31',
    // endpoint: 'http://host.docker.internal:3000',
    // region: "us-east-2",
  });
  

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ file: getProducts.ts:16 ~ handler ~ event:", JSON.stringify(event.body));
    console.log("🚀 ------------------------------------------------------🚀");

    try {

        const product = JSON.parse((event?.body) as any || {});

        await invokeLambda(product);

        return ResponseUtil({
            product
        });
    } catch (err) {
        console.error('getProduct- ERROR: ', JSON.stringify(err));
        return ResponseUtil('Some Error', 500);
    }
};

const invokeLambda = async (data: object) => {
    try {
        const lambdaFunc: any = {
            FunctionName: 'practice-aws-sam-lambda-app-HandleProductFunction-PxkBAUK5lJaH',
            InvocationType: 'RequestResponse',
            LogType: "Tail",
            Payload: JSON.stringify(data)
        };
        await lambda.invoke(lambdaFunc, function(err, data) {
            if (err) {
              throw err;
            } else {
              console.log('LambdaB invoked: ' +  data.Payload);
            }
          }).promise();
    } catch (err) {
        console.error('invokeLambda- ERROR: ', JSON.stringify(err));
    }
}
