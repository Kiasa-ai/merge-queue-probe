import assert from "node:assert/strict";
import { test } from "node:test";
import { hello } from "./greet.mjs";

test("hello", () => assert.equal(hello("you"), "Hello, you"));
