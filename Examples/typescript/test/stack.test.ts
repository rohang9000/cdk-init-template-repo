import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { QuantumAnalyticsStack } from '../lib/stack';

test('SQS Queue and SNS Topic Created', () => {
  const app = new cdk.App();
  const stack = new QuantumAnalyticsStack(app, 'QuantumTestStack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeoutSeconds: 300
  });

  template.hasResourceProperties('AWS::SNS::Topic', {});
});