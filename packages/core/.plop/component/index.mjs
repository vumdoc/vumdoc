export default (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is component name ?",
        /**
         * @param {string} value
         * @returns {boolean | string}
         */
        validate: (value) => {
          if (!value) return "name is required";

          if (!value.startsWith("vum-")) return "name must start with vum-";

          return true;
        },
      },
    ],
    actions: (data) => {
      const path = `../../src/components`;
      const actions = [
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.ce.ts`,
          templateFile: "./component.ce.ts.hbs",
        },
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.post.css`,
          templateFile: "./component.post.css.hbs",
        },
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.stories.ts`,
          templateFile: "./component.stories.ts.hbs",
        },
      ];

      return actions;
    },
  });
};
