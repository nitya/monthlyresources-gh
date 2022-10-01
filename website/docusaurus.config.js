// @ts-check

// CONFIG: Set for use in themeConfig: prism
//    Pick: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


// USAGE: Config object can be accessed via React context as `{siteConfig}`
//   See: https://docusaurus.io/docs/configuration#custom-configurations
/** @type {import('@docusaurus/types').Config} */
const config = {

  // CONFIG: Add Custom Fields - globally reference them from siteConfig
  //    See: https://docusaurus.io/docs/deployment#using-environment-variables
  customFields: {
    description: "Explore the latest content and code samples related to a particular theme each month - curated by the Microsoft Developer Editorial team",
  },

  // CONFIG: Landing Pages uses this (also globally via siteConfig)
  title: 'This Month In Microsoft Dev News',
  tagline: 'Microsoft Developer Editorial Team',

  // CONIFIG: Used for GitHub Pages
  url: 'https://nitya.github.io',
  baseUrl: '/monthly-resources-gh/',
  organizationName: 'nitya', 
  projectName: 'monthly-resources-gh',
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  // CONFIG: Early detection for site health
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // CONFIG: Set presets for chosen theme
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        // CONFIG: docs = collections of pages, tutorials, documentation
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        // Disable => docs: false,
        docs: false,

        // CONFIG: blog = timestamped pages, tags, site feed 
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
        blog: {
          routeBasePath: '/', // blog-only mode, serves blog at root
          showReadingTime: true,
          blogTitle: 'Monthly Resources',
          blogDescription: 'Get your monthly news and content updates from Microsoft Developers Editorial Team',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent Articles',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          sortPosts: 'descending'
        },

        // CONFIG: theme = currently using `classic`
        //    See: https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  // CONFIG: theme = set properties for UI like navbar, footer, docs, copyright etc.
  //    See: https://docusaurus.io/docs/api/docusaurus-config#themeConfig
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      // CONFIG: default theme color mode
      //    See:
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // CONFIG: navbar logo, items, style, stickiness
      //    See: https://docusaurus.io/docs/next/api/themes/configuration#navbar
      navbar: {
        title: 'This Month In Microsoft Developers',
        logo: {
          alt: 'Logo',
          src: '/img/logo.svg',
        },
        items: [
          {to: '/landing', label: 'Home', position: 'right'},
        ],
      },
      
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft Azure | Developer Product Marketing`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
