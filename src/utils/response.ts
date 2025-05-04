import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const ResponseUtil = (body: any, statusCode = 200) => {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: response.ts:4 ~ ResponseUtil ~ body:", JSON.stringify(body));
    console.log("🚀 -----------------------------------------------------🚀");

    const response: APIGatewayProxyResult = {
        headers: { "Content-Type": "application/json" },
        statusCode,
        body: JSON.stringify(body),
    };

    return response;
}