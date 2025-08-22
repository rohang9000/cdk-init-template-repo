package com.nexustech;

import software.amazon.awscdk.App;
import software.amazon.awscdk.StackProps;

public class App {
    public static void main(final String[] args) {
        App app = new App();

        new CloudInfraStack(app, "NexusTechCloudStack", StackProps.builder().build());

        app.synth();
    }
}