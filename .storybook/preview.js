export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        // "Zero",
        // ["NPM Server", "保存逻辑", "GraphQL_TS自动生成", "Welby"],
        "规约",
        ["开发环境", "React", "命名规则", "导入导出管理", "TypeScript"],
      ],
    },
    showPanel: false,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
