using Amazon.CDK;
using Amazon.CDK.Assertions;
using Xunit;
using MyCdkApp;

namespace MyCdkApp.Tests
{
    public class MyCdkAppTests
    {
        [Fact]
        public void SQSQueueAndSNSTopicCreated()
        {
            var app = new App();
            var stack = new MyCdkAppStack(app, "TestStack");

            var template = Template.FromStack(stack);

            template.HasResourceProperties("AWS::SQS::Queue", new Dictionary<string, object>
            {
                ["VisibilityTimeoutSeconds"] = 300
            });

            template.HasResourceProperties("AWS::SNS::Topic", new Dictionary<string, object>());
        }
    }
}