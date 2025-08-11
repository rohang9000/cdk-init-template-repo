#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyStack } from '../lib/my-stack.js';

const app = new cdk.App();
new MyStack(app, 'MyJsCdkStack');