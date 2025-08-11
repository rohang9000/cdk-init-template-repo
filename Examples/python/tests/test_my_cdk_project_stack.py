import aws_cdk as cdk
from aws_cdk import assertions
from my_cdk_project.my_cdk_project_stack import MyCdkProjectStack

def test_sqs_queue_and_sns_topic_created():
    app = cdk.App()
    stack = MyCdkProjectStack(app, "TestStack")
    template = assertions.Template.from_stack(stack)

    template.has_resource_properties("AWS::SQS::Queue", {
        "VisibilityTimeoutSeconds": 300
    })

    template.has_resource_properties("AWS::SNS::Topic", {})