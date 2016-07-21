# Gradle-Typescript-Karma Template

Template for creating a typescript project tested with karma.

# Plugins used by this template

[gradle-node-plugin](https://github.com/srs/gradle-node-plugin)

[typescript-gradle-plugin](https://github.com/sothmann/typescript-gradle-plugin)

# using the template

```
    $ gradle compileTypeScript # transpile typescript to javascript. javascript files are created in directory $projectDir/build

    $ gradle npmInstall        # install node dependencies defined in package.json to $projectDir/node_modules

    $ gradle nodeInstall       # install nodejs to the directory $projectDir/.gradle/nodejs [issue](https://github.com/srs/gradle-node-plugin/issues/91)

    $ gradle clean             # deletes the directory $projectDir/build
```
# Debug with Intellij

Tested with 2016.1.3 [idea-IU-145.1617.8]
Karma debugging does not work with idea 2016.2.2

* setup [Javascript debugging](https://www.jetbrains.com/help/idea/2016.1/debugging-javascript.html)
* setup [chrome intellij plugin](https://www.jetbrains.com/help/webstorm/2016.1/using-jetbrains-chrome-extension.html)
* setup [nodejs integration](https://www.jetbrains.com/help/idea/2016.1/running-and-debugging-node-js.html)
* setup [typescript integration](https://www.jetbrains.com/help/idea/2016.1/typescript-support.html using tsconfig.json and with enabled compiler)
* setup [karma runner](https://www.jetbrains.com/help/idea/2016.1/preparing-to-use-karma-test-runner.html)
* right click on "karma.conf.js" => debug
* set your breakpoints (GreeterUnitTest.ts)
* break points are hit on page reload of http://localhost:9876/debug.html (should be open in chrome).
I don`t know why the break points are not hit if the page load was trigger by intellij.



