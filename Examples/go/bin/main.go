package main

import (
    "nexus-cloud-platform/lib"
    "github.com/aws/aws-cdk-go/awscdk/v2"
)

func main() {
    app := awscdk.NewApp(nil)

    lib.NewNexusCloudStack(app, "NexusCloudStack", &awscdk.StackProps{})

    app.Synth(nil)
}