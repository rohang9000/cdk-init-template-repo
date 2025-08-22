import { App, assertions } from 'aws-cdk-lib';
import { LogisticsStack } from '../lib/my-stack.js';

test('SQS Queue and SNS Topic Created', () => {
  const app = new App();
  const stack = new LogisticsStack(app, 'TestStack');

  const template = assertions.Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });

  template.resourceCountIs('AWS::SNS::Topic', 1);
});