"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloCdkStack = void 0;
const cdk = require("aws-cdk-lib");
// Import the Lambda module
const lambda = require("aws-cdk-lib/aws-lambda");
class HelloCdkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define the Lambda function resource
        const myFunction = new lambda.Function(this, "HelloWorldFunction", {
            runtime: lambda.Runtime.NODEJS_18_X,
            handler: "index.handler",
            code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          return {
            statusCode: 200,
            body: JSON.stringify('Hello World!'),
          };
        };
      `),
        });
        // Define the Lambda function URL resource
        const myFunctionUrl = myFunction.addFunctionUrl({
            authType: lambda.FunctionUrlAuthType.NONE,
        });
        // Define a CloudFormation output for your URL
        new cdk.CfnOutput(this, "myFunctionUrlOutput", {
            value: myFunctionUrl.url,
        });
    }
}
exports.HelloCdkStack = HelloCdkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tY2RrLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVsbG8tY2RrLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQywyQkFBMkI7QUFDM0IsaURBQWlEO0FBRWpELE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzFDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsc0NBQXNDO1FBQ3RDLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDakUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7T0FPNUIsQ0FBQztTQUNILENBQUMsQ0FBQztRQUVILDBDQUEwQztRQUMxQyxNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQzlDLFFBQVEsRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSTtTQUMxQyxDQUFDLENBQUM7UUFFSCw4Q0FBOEM7UUFDOUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUM3QyxLQUFLLEVBQUUsYUFBYSxDQUFDLEdBQUc7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBNUJELHNDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbi8vIEltcG9ydCB0aGUgTGFtYmRhIG1vZHVsZVxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9DZGtTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIERlZmluZSB0aGUgTGFtYmRhIGZ1bmN0aW9uIHJlc291cmNlXG4gICAgY29uc3QgbXlGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJIZWxsb1dvcmxkRnVuY3Rpb25cIiwge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE4X1gsIC8vIFByb3ZpZGUgYW55IHN1cHBvcnRlZCBOb2RlLmpzIHJ1bnRpbWVcbiAgICAgIGhhbmRsZXI6IFwiaW5kZXguaGFuZGxlclwiLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUlubGluZShgXG4gICAgICAgIGV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCdIZWxsbyBXb3JsZCEnKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgYCksXG4gICAgfSk7XG5cbiAgICAvLyBEZWZpbmUgdGhlIExhbWJkYSBmdW5jdGlvbiBVUkwgcmVzb3VyY2VcbiAgICBjb25zdCBteUZ1bmN0aW9uVXJsID0gbXlGdW5jdGlvbi5hZGRGdW5jdGlvblVybCh7XG4gICAgICBhdXRoVHlwZTogbGFtYmRhLkZ1bmN0aW9uVXJsQXV0aFR5cGUuTk9ORSxcbiAgICB9KTtcblxuICAgIC8vIERlZmluZSBhIENsb3VkRm9ybWF0aW9uIG91dHB1dCBmb3IgeW91ciBVUkxcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIm15RnVuY3Rpb25VcmxPdXRwdXRcIiwge1xuICAgICAgdmFsdWU6IG15RnVuY3Rpb25VcmwudXJsLFxuICAgIH0pO1xuICB9XG59Il19