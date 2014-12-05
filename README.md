# mocha-silent-reporter

A minimal reporter for [Mocha](http://mochajs.org/) that is silent when tests
pass. Ideal for use with `mocha --watch`.

    npm install --save-dev mocha-silent-reporter
    mocha -R mocha-silent-reporter <options>

This reporter only outputs information about test failures. This works great for
automated running such as when watching the test files so as to not get the
`n tests passed` message everytime a file changes. When tests fail it will
output the test name, source file, and error stack.
