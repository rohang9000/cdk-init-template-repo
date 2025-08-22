namespace ApexCloudSuite

open Amazon.CDK
open Amazon.CDK.AWS.SQS
open Amazon.CDK.AWS.SNS
open Amazon.CDK.AWS.SNS.Subscriptions

type ApexInfraStack(scope: Construct, id: string, ?props: IStackProps) as this =
    inherit Stack(scope, id, defaultArg props null)

    let queue = Queue(this, "ProcessingQueue", QueueProps(VisibilityTimeout = Duration.Seconds(300.0)))

    let topic = Topic(this, "NotificationTopic")

    do topic.AddSubscription(SqsSubscription(queue)) |> ignore