/**
 * @fileoverview no console.error() in your code
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
      description: "no console.error() in your code",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    // 报错信息描述
    messages: {
      avoidMethod: "'{{name}}' function of console is forbidden in code",
    },
  },

  create(context) {
    return {
      // visitor functions for different types of nodes
      'MemberExpression': (node) => {
        // 如果在ast中满足以下条件，就用 context.report() 进行对外警告⚠️
        if (node.property.name === 'error' && node.object.name === 'console') {
            context.report({
                node,
                messageId: 'avoidMethod',
                data: {
                    name: node.property.name,
                },
            });
        }
      },
    };
  },
};
