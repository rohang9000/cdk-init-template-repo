import setuptools

setuptools.setup(
    name="my_cdk_project",
    version="0.1.0",
    description="A CDK Python app",
    author="your-name",
    package_dir={"": "."},
    packages=setuptools.find_packages(where="."),
    install_requires=[
        "aws-cdk-lib==2.139.0",
        "constructs>=10.0.0,<11.0.0"
    ],
    python_requires=">=3.7",
)