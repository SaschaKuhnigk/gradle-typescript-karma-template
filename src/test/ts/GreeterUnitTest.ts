import Greeter = require('../../main/ts/Greeter')

describe("A suite", function () {

    var greeter = new Greeter("Sascha");

    it("test1", function () {
        expect(greeter.greet()).toBe("Hello, Sascha");
    });

    it("test2", function () {
        expect(true).toBe(true);
    });
});