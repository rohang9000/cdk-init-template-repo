package com.nexustech;

import software.amazon.awscdk.App;

public final class NexusCloudPlatformApp {
    public static void main(final String[] args) {
        App app = new App();

        new NexusCloudPlatformStack(app, "NexusCloudPlatformStack");

        app.synth();
    }
}
