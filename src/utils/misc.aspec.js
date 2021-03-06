if (typeof chai === "undefined" && typeof window === "undefined") {
    var chai = require("chai");
}

if (typeof expect === "undefined") {
    var expect = chai.expect;
}

if (typeof msngr === "undefined" && typeof window === "undefined") {
    var msngr = require("../../msngr");
}

describe("./utils/misc.js", function () {
    "use strict";

    this.timeout(60000);

    it("msngr.utils.id() - generate 1 id", function () {
        expect(msngr.utils.id()).to.not.equal(undefined);
    });

    it("msngr.utils.id() - generate 100 unique ids", function () {
        var ids = [];
        for (var i = 0; i < 100; ++i) {
            var d = msngr.utils.id();
            if (ids.indexOf(d) === -1) {
                ids.push(d);
            }
        }

        expect(ids.length).to.equal(100);
    });

    it("msngr.utils.id() - generate 10000 unique ids", function () {
        var ids = [];
        for (var i = 0; i < 10000; ++i) {
            var d = msngr.utils.id();
            if (ids.indexOf(d) === -1) {
                ids.push(d);
            }
        }

        expect(ids.length).to.equal(10000);
    });

    it("msngr.utils.now() - generates a value", function () {
        expect(msngr.utils.now()).to.exist;
    });

    it("msngr.utils.now(true) - 5 consecutive calls have unique values", function () {
        var t1 = msngr.utils.now(true);
        var t2 = msngr.utils.now(true);
        var t3 = msngr.utils.now(true);
        var t4 = msngr.utils.now(true);
        var t5 = msngr.utils.now(true);

        expect(t1).to.exist;
        expect(t2).to.exist;
        expect(t3).to.exist;
        expect(t4).to.exist;
        expect(t5).to.exist;

        expect(t2).to.not.equal(t1);
        expect(t3).to.not.equal(t2);
        expect(t4).to.not.equal(t3);
        expect(t5).to.not.equal(t4);
    });

    it("msngr.utils.now('sdfkjsdfl') - Correctly handles invalid input", function () {
        var t = msngr.utils.now("sdfkjsdfl");

        expect(t).to.exist;
    });
});
