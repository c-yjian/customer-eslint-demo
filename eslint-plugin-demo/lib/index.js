/**
 * @fileoverview 自定义eslint规则
 * @author yjian
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  rules: {
        // 项目在使用时，对应的规则名称
      'no-console-error': require('./rules/no-console-error'),
      'no-http-protocol': require('./rules/no-http-protocol'),
  },
  configs: {
      recommended: {
          rules: {
              'demo/no-console-error': 2, // 可以省略 eslint-plugin 前缀
              'demo/no-http-protocol': 2,
          },
      },
  },
}



