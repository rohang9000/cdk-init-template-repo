from aws_cdk import Stack, Duration
from aws_cdk import aws_sqs as sqs
from aws_cdk import aws_sns as sns
from aws_cdk import aws_sns_subscriptions as subs
from constructs import Construct

class MyCdkProjectStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        queue = sqs.Queue(self, "MyAppQueue",
            visibility_timeout=Duration.seconds(300)
        )

        topic = sns.Topic(self, "MyAppTopic")

        topic.add_subscription(subs.SqsSubscription(queue))