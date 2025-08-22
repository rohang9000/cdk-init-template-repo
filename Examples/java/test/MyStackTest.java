package com.nexustech;

import software.amazon.awscdk.App;
import software.amazon.awscdk.assertions.Template;
import org.junit.jupiter.api.Test;

public class CloudInfraStackTest {

    @Test
    public void testStack() {
        App app = new App();
        CloudInfraStack stack = new CloudInfraStack(app, "TestStack", null);

        Template template = Template.fromStack(stack);

        template.hasResourceProperties("AWS::SQS::Queue", 
            java.util.Map.of("VisibilityTimeout", 300));
        template.resourceCountIs("AWS::SNS::Topic", 1);
    }
}