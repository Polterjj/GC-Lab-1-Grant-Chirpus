const { expect, test } = require("@jest/globals");
const translate = require("./script.js");

test("words that start with a", () => {
    expect(translate("apple")).toEqual("appleway");
});
test("words that start with e", () => {
    expect(translate("elephant")).toEqual("elephantway");
});
test("words that start with i", () => {
    expect(translate("igloo")).toEqual("iglooway");
});
test("words that start with o", () => {
    expect(translate("ogre")).toEqual("ogreway");
});
test("words that start with u", () => {
    expect(translate("under")).toEqual("underway");
});
test("words that start with two consonant", () => {
    expect(translate("clock")).toEqual("ockclay");
});
test("words that start with one consonant", () => {
    expect(translate("ranch")).toEqual("anchray");
});
test("words that start with three consonant", () => {
    expect(translate("string")).toEqual("ingstray");
});
test("words that start with lower case conversion", () => {
    expect(translate("WOW")).toEqual("owway");
});