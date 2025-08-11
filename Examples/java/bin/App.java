package com.example;

import software.amazon.awscdk.App;
import software.amazon.awscdk.StackProps;

public class App {
    public static void main(final String[] args) {
        App app = new App();

        new MyStack(app, "MyJavaCdkStack", StackProps.builder().build());

        app.synth();
    }
}