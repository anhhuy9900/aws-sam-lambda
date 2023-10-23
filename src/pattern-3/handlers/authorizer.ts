import { Handler } from 'aws-lambda';
import jwt from 'jsonwebtoken';

export const handler: Handler = async (event, context, callback) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ PATTERN-3 - Lambda Authorizer - handler -> event:", JSON.stringify(event));
    console.log("🚀 ~ PATTERN-3 - Lambda Authorizer -  handler -> context:", JSON.stringify(context));
    console.log("🚀 ------------------------------------------------------🚀");

    try {
        const token = event.headers['Authorization'];
        console.log("🚀 ~ PATTERN-3 - Lambda Authorizer -  handler -> token:", JSON.stringify(token));
        const authenticated = jwt.verify(token, process.env.JWT_SECRET as string);
        console.log("🚀 ~ PATTERN-3 - Lambda Authorizer - Token authenticated: ", authenticated);

        callback(null, generatePolicy('user', 'Allow', event.methodArn));
    } catch (error) {
        console.error('PATTERN-3 - Lambda Authorizer - ERROR: ', error);
        callback("Unauthorized", JSON.stringify({
            msg: "User's not allow",
        }));
    }
};

// Help function to generate an IAM policy
const generatePolicy = function(principalId: string, effect: any, resource: any) {
    
    // Required output:
    const authResponse: Record<string, any> = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        const policyDocument: Record<string, any> = {};
        policyDocument.Version = '2012-10-17'; // default version
        policyDocument.Statement = [];
        const statementOne: Record<string, any> = {};
        statementOne.Action = 'execute-api:Invoke'; // default action
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    
    // Optional output with custom properties of the String, Number or Boolean type.
    authResponse.context = {
        "stringKey": "stringval",
        "numberKey": 123,
        "booleanKey": true,
        "authorizerTimestamp": +new Date
    };
    
    console.log("Sent policy: " + authResponse.policyDocument);
    return authResponse;
}
