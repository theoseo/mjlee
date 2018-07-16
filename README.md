# Migration from Wordpress to Gatsby-Contentful using gatsby-contentful-starter

[www.mjlee-draws.com](https://mjlee-draws.com) site orginally created using Wordpress and its theme which I created. Site owner and I decided to move from Wordpress to static website. Gatsby and Contentful were the one of the best choices.

### Create Gatsbyjs site using Contentful

I used [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter) to set up [Contentful](http://contentful.com) environment. It automatically set contentful API environments. Basically, I refered [GatsbyJS and Contentful in five minutes](https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/). After I set up Contentful environment, I migrated my Wordpress theme of mjlee-draws.com to Gatsbyjs. 

- [ ] To do : How I create my own Gatsby site based on my Wordpress theme.

### Site Deploy to Netlify

There are two options to deploy my code. The first is to use [Netlifyctl](https://github.com/netlify/netlifyctl) which is based on command line. The second option is to add my git repository to Netlify. When you use this option, you have to add Contentful Space Id and Access Token as CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN from your .contentful.json file to Netlify's build environment variables.

- [ ] To do : How to automatically rebuild my gatsby site when a content is published in Contentful

### Gatsby Contentful Starter readme 

This is originally from [gatsby-contentful-starter readme file](https://github.com/contentful-userland/gatsby-contentful-starter/)

Gatsby [Contentful](https://www.contentful.com) starter for creating a blog

![The index page of the starter blog](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/screenshot.jpg "The index page of the starter blog")

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Contribution

This project is part of [contentful-userland](https://github.com/contentful-userland) which means that we’re always open to contributions and pull requests. You can learn more about how contentful userland is organized by visiting [our about repository](https://github.com/contentful-userland/about).

## Requirements

To use this project you have to have a Contentful account. If you don't have one yet you can register at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

### Get the source code and install dependencies.

```
$ git clone git@github.com:contentful-userland/gatsby-contentful-starter.git
$ npm i
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new contentful-starter https://github.com/contentful-userland/gatsby-contentful-starter
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

![Command line dialog of the npm run setup command](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/setup.jpg "Command line dialog of the npm run setup command")

This command will ask you for a space ID, and access tokens for the Contentful Management, Preview and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `npm run dev`

Run in the project locally using the [Contentful Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/). This can perfect to preview changes before they go into production.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

## Roadmap

- [ ] [make the starter completely responsive](https://github.com/contentful-userland/gatsby-contentful-starter/issues/2)
- [ ] [include tags](https://github.com/contentful-userland/gatsby-contentful-starter/issues/3)
- [ ] [support traced placeholders](https://github.com/contentful-userland/gatsby-contentful-starter/issues/4)
- [ ] [add i18n](https://github.com/contentful-userland/gatsby-contentful-starter/issues/6)

## Other resources

- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya
