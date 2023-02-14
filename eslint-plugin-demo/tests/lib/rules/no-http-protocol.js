/**
 * @fileoverview 不可使用http协议
 * @author yjian
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-http-protocol"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-http-protocol", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "const txtUrl = 'http://xx.xx.x'",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
