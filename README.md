SleepnessUberFrontendValidationBundle
=====================

This Bundle is a powerful tool to provide a client side validation of form data.

Introduction
------------

### Separation of concern

Symfony2 provides a powerful tool for server side validation.
This bundle provides a tool to make your app more secured by converting Symfony2 server side rules
into friendly client side validation.

### Symfony compatibility

This bundle works on any Symfony 2.0+ version.

### Features

This bundle supports the following constraints:

Basic Constraints:
- NotBlank
- Blank
- NotNull
- Null
- True
- False

String Constraints:
- Email
- Length
- Url

Comparison Constraint:
- EqualTo
- NotEqualTo

Date Constraint:
- DateTime
- Date

File Constraints:
- File
- Image

SleepnessUberFrontendValidationBundle supports translating constraint messages, defined in message option of constraint.

Documentation
-------------

The bulk of the documentation is stored in the [`Resources/doc/index.md`](https://github.com/Sleepness/UberFrontendValidationBundle/blob/develop/Resources/doc/index.md) file in this bundle.

Installation
------------

The installation of Bundle instructions are located in the documentation.

Configuration
-------------

All the configuration instructions are located in the documentation.

Contributing
------------

Pull requests are welcome.

License
-------

See the complete license in the bundle: [`Resources/meta/LICENSE`](https://github.com/Sleepness/UberFrontendValidationBundle/blob/develop/Resources/meta/LICENSE)
