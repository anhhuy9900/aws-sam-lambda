import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
    console.log("🚀 --------------------------------------------------------------------🚀");
    console.log("🚀 ~ file: lambdaEnvVar ~ Handler= ~ event: ", JSON.stringify(event));
    console.log("🚀 ~ file: lambdaEnvVar ~ ENV ", JSON.stringify(process.env));
    console.log("🚀 --------------------------------------------------------------------🚀");
    return "Testing Lambda Environment Variable"; 
};
