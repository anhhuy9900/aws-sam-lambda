#### API Gateway REST API with Lambda authorizer
- Create a REST API Gateway with a Lambda Token Authorizer for access control
This pattern deploys an Amazon API Gateway REST API endpoint that uses a Lambda Token Authorizer for access control.
If the request to the endpoint does not include a 'authorizationToken' header, the Lambda Authorizer will not be invoked and API Gateway will return a 401 Forbidden.
If the request to the endpoint includes a 'authorizationToken' header, the Lambda Authorizer will be invoked and its response will depend on the value of the 'authorizationToken' header.
If the value of 'authorizationToken' header is 'unauthorized', API Gateway will return a 401 Unauthorized error.
If the value of 'authorizationToken' header is 'Bearer deny', API Gateway will return a 403 error.
Only if the value of 'authorizationToken' header is 'Bearer allow', API Gateway will successfully invoke the Lambda integration and return a 200.
For any other case, API Gateway will return a 500 error.
- Reference:
- https://serverlessland.com/patterns/apigw-lambda-authorizer-sam-nodejs