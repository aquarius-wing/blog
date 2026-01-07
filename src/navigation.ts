import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: '笔记软件',
    //       href: getPermalink('note-taking-apps', 'category'),
    //     }
    //   ],
    // },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} <a class="text-blue-600 underline dark:text-muted" href="https://aquariuswing.com/">Wing’s Blog</a> · Powered by <a class="text-blue-600 underline dark:text-muted" href="https://astro.build/" target="_blank">Astro</a> & <a class="text-blue-600 underline dark:text-muted" href="https://github.com/onwidget/astrowind" target="_blank">AstroWind</a>
  `,
};
