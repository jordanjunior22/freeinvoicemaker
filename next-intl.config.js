/** @type {import('next-intl').NextIntlConfig} */
module.exports = {
  locales: ['en', 'es', 'fr'], // add your supported languages
  defaultLocale: 'en',
  // optional: you can specify the folder for messages
  messagesDirectory: './app/i18n',
};
