namespace MyCdkApp.Tests

open Xunit
open Amazon.CDK
open Amazon.CDK.Assertions
open MyCdkApp
open System.Collections.Generic

type MyCdkAppTests() =

    [<Fact>]
    member _.``SQS Queue and SNS Topic Created``() =
        let app = App()
        let stack = MyCdkAppStack(app, "TestStack")
        let template = Template.FromStack(stack)

        let queueProps = Dictionary<string, obj>()
        queueProps.Add("VisibilityTimeoutSeconds", box 300)
        template.HasResourceProperties("AWS::SQS::Queue", queueProps)

        let topicProps = Dictionary<string, obj>()
        template.HasResourceProperties("AWS::SNS::Topic", topicProps)