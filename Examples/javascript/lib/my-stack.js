import { Stack, Duration } from 'aws-cdk-lib';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { SqsSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';

export class MyStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const queue = new Queue(this, 'MyJsQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new Topic(this, 'MyJsTopic');

    topic.addSubscription(new SqsSubscription(queue));
  }
}