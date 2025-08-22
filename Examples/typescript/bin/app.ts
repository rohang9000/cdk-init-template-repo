#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { QuantumAnalyticsStack } from '../lib/stack';

const app = new cdk.App();
new QuantumAnalyticsStack(app, 'QuantumAnalyticsStack');