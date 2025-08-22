#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LogisticsStack } from '../lib/my-stack.js';

const app = new cdk.App();
new LogisticsStack(app, 'StellarLogisticsStack');