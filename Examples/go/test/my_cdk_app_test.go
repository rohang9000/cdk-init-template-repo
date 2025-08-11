package test

import (
    "testing"
    "github.com/aws/aws-cdk-go/awscdk/v2/assertions"
    "github.com/aws/aws-cdk-go/awscdk/v2"
    "github.com/aws/jsii-runtime-go"
    "mycdkapp/lib"
)

func TestMyCdkAppStack(t *testing.T) {
    app := awscdk.NewApp(nil)
    stack := lib.NewMyCdkAppStack(app, "TestStack", &awscdk.StackProps{})
    template := assertions.Template_FromStack(stack)

    template.HasResourceProperties(jsii.String("AWS::SQS::Queue"), map[string]interface{}{
        "VisibilityTimeoutSeconds": float64(300),
    })

    template.HasResourceProperties(jsii.String("AWS::SNS::Topic"), map[string]interface{}{})
}