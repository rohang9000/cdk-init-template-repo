package com.nexustech;

import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.Duration;
import software.amazon.awscdk.services.sqs.Queue;
import software.amazon.awscdk.services.sns.Topic;
import software.amazon.awscdk.services.sns.subscriptions.SqsSubscription;
import software.constructs.Construct;

public class CloudInfraStack extends Stack {
    public CloudInfraStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        Queue queue = Queue.Builder.create(this, "ProcessingQueue")
            .visibilityTimeout(Duration.seconds(300))
            .build();

        Topic topic = Topic.Builder.create(this, "NotificationTopic").build();

        topic.addSubscription(new SqsSubscription(queue));
    }
}