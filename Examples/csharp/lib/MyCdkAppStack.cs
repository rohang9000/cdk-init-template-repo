using Amazon.CDK;
using Amazon.CDK.AWS.SQS;
using Amazon.CDK.AWS.SNS;
using Amazon.CDK.AWS.SNS.Subscriptions;

namespace ApexCloudSuite
{
    public class ApexInfraStack : Stack
    {
        internal ApexInfraStack(Construct scope, string id, IStackProps? props = null)
            : base(scope, id, props)
        {
            var queue = new Queue(this, "ProcessingQueue", new QueueProps
            {
                VisibilityTimeout = Duration.Seconds(300)
            });

            var topic = new Topic(this, "NotificationTopic");

            topic.AddSubscription(new SqsSubscription(queue));
        }
    }
}