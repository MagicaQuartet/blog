module.exports = {
  title: "까막's TIL",
  description: "Dev Note by MagicaQuartet",
  themeConfig: {
    nav: [{ text: "About", link: "/about/" }],
    sidebar: {
      "/javascript/": [
        {
          title: "Basic",
          collapsible: true,
          children: ["/javascript/basic/intro.md"]
        }
      ],
      "/": [
        {
          title: "Javascript",
          path: "/javascript/"
        }
      ]
    }
  }
};
