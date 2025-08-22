package lib

import (
    "github.com/aws/aws-cdk-go/awscdk/v2"
    "github.com/aws/aws-cdk-go/awscdk/v2/awssqs"
    "github.com/aws/aws-cdk-go/awscdk/v2/awssns"
    "github.com/aws/aws-cdk-go/awscdk/v2/awssnssubscriptions"
    "github.com/aws/constructs-go/constructs/v10"
    "github.com/aws/jsii-runtime-go"
)

type NexusCloudStackProps struct {
    awscdk.StackProps
}

func NewNexusCloudStack(scope constructs.Construct, id string, props *awscdk.StackProps) awscdk.Stack {
    stack := awscdk.NewStack(scope, &id, props)

    queue := awssqs.NewQueue(stack, jsii.String("CloudProcessingQueue"), &awssqs.QueueProps{
        VisibilityTimeout: awscdk.Duration_Seconds(jsii.Number(300)),
    })

    topic := awssns.NewTopic(stack, jsii.String("CloudNotificationTopic"), nil)

    topic.AddSubscription(awssnssubscriptions.NewSqsSubscription(queue, nil))

    return stack
}