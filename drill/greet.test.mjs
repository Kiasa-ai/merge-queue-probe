import assert from "node:assert/strict";
import { test } from "node:test";
import { greet } from "./greet.mjs";

test("greet", () => assert.equal(greet("you"), "Hello, you"));
