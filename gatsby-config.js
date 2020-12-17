const path = require("path");

module.exports = {
  siteMetadata: {
    title: `THEA - Soluciones en Lámina de Metal`,
    description: `THEA es una empresa dedicada a ofrecer soluciones para el trabajo en lámina de metal. A través de servicios como corte, punzonado y doblado logra conformar un servicio integral a la medida de sus clientes. A su vez distribuye componentes de troquel para las industrias automotriz, aeroespacial y de la construcción que buscan trasformar la lámina en producto semi-terminado o terminado.`,
    author: `@irvingdc`,
    siteUrl: `https://theatechsolution.com/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://theatechsolution.com",
        sitemap: "https://theatechsolution.com/sitemap.xml",
        policy:
          process.env.GATSBY_ACTIVE_ENV === "QA"
            ? [{ userAgent: "*", disallow: ["/"] }]
            : [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "0000",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            "primary-color": "#8dbe40",
            "link-color": "#1890ff",
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
        stylesheets: path.join(__dirname, "src/stylesheets"),
        locales: path.join(__dirname, "src/locales"),
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
