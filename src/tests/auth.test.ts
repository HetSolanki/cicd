import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

const headers: IncomingHttpHeaders = {
  "content-type": "application/json",
  authorization: "Bearer abc123",
  accept: "application/json",
  "x-custom-header": undefined,
};

const headers2: IncomingHttpHeaders = {
  "content-type": "application/json",
  authorization: "ApiKey abc123",
  accept: "application/json",
  "x-custom-header": undefined,
};

const apiKey1 = getAPIKey(headers);
const apiKey2 = getAPIKey(headers2);

describe("test getAPIKey function", () => {
  test("apiKey response", () => {
    expect(apiKey1).toBeNull();
  });
  test("apiKey response not to be null", () => {
    expect(apiKey2).not.toBeNull();
  });
});
