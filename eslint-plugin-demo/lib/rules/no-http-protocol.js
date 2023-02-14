/**
 * @fileoverview 不可使用http协议
 * @author yjian
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "不可使用http协议",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    // 报错信息描述
    messages: {
      avoidHttpProtocol: "'{{name}}' value avoid using http protocol.",
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      'VariableDeclaration VariableDeclarator': (node) => {
        if (node.init && node.init.value && node.init.value.includes('http://')) {
          // 将http:修改为 https:
          const httpsProtocal = node.init.value.replace(/http:/g, 'https:');
          context.report({
            node,
            messageId: 'avoidHttpProtocol',
            data: {
                name: node.id && node.id.name,
            },
            fix(fixer) {
              return fixer.replaceText(node.init, `'${httpsProtocal}'`)
            }
          });
        }
      }
    };
  },
};
