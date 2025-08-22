#!/usr/bin/env python3

import aws_cdk as cdk

from quantum_analytics.quantum_analytics_stack import QuantumAnalyticsStack


app = cdk.App()
QuantumAnalyticsStack(app, "QuantumAnalyticsStack")

app.synth()
