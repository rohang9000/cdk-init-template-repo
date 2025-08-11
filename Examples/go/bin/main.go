package main

import (
    "mycdkapp/lib"
    "github.com/aws/aws-cdk-go/awscdk/v2"
)

func main() {
    app := awscdk.NewApp(nil)

    lib.NewMyCdkAppStack(app, "MyCdkAppStack", &awscdk.StackProps{})

    app.Synth(nil)
}