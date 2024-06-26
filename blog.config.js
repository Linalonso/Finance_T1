const BLOG = {
  title: 'T1理财',
  author: 'T1理财',
  email: '17linalonso@gmail.com',
  link: 'https://www.financet1.com',
  newsletter: 'T1 Finance Weekly',
  description: '写有价值的东西，让生活更有意义。',
  lang: 'zh-CN', // ['zh-CN', 'en-US', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#292a2d', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    newsletter: false,
    notes: false,
    category: true,
    contact: true,
    books: false,
    friends: false
  },
  showWeChatPay: false,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/Finance_T1',
    youtube: 'https://www.youtube.com/@Finance_T1',
    telegram: 'https://t.me/Finance_T1',
    linktree: 'https://linktr.ee/Finance_T1'
  },
  seo: {
    keywords: ['理财', 'finance', 'Blog', 'T1', 'T1finance', '富途', '美股开户', '港股开户', '富途开户', '老虎开户', '长桥开户', '盈立开户', '华盛开户', 'moomoo开户', '老虎新加坡开户', '长桥新加坡开户', '盈立新加坡开户', '盈透开户', '必贝开户'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'zuolan.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '6305284239', // The chat id of your Telegram bot
  telegramChannelUrl: 't.me/Finance_T1/', // The link of your Telegram channel
  telegramChannelName: 'Finance_T1', // The name of your Telegram channel
  craftConfigShareUrl: 'https://www.craft.do/s/kQtcWqkv98cHhB', // The link to share your craft config
  analytics: {
    provider: '', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://wpyoidrtrgwdewjycqvg.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweW9pZHJ0cmd3ZGV3anljcXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3ODU0MDIsImV4cCI6MjAyOTM2MTQwMn0.JAcOw6GrCK8_eWPOixz20Eu8Y4KkIxxmq68pcuJ8K1Q' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
