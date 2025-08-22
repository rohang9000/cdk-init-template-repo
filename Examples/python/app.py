#!/usr/bin/env python3
import aws_cdk as cdk
from my_cdk_project.my_cdk_project_stack import AnalyticsInfraStack

app = cdk.App()
AnalyticsInfraStack(app, "AnalyticsInfraStack")
app.synth()