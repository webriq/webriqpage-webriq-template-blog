# Roots + WebriQ CMS

This is a simple example of how to integrate Webriq CMS with a roots based site.

## Redirects

```
/blog/* /:splat 301!
/* /blog/:splat 200
```

## Setting up

* Install [node](https://nodejs.org/en/) application in your system.

* Install [roots](http://roots.cx/articles/getting-started) in your system globally `npm i roots -g` if you haven't done this before.

* Make sure to install the [netlify-git-api](https://github.com/webriq/netlify-git-api) before you start.

Then:

```bash
git clone https://github.com/webriq/starter-template
cd starter-template
netlify-git-api users add
netlify-git-api serve
```

Open a separate terminal window and run:

```bash
npm install
roots watch
```

## Using

Visit [localhost:1111](http://localhost:1111/) to browser the site.

Visit [localhost:1111/admin](http://localhost:1111/admin) to use the CMS.

To run against the GitHub API in production, edit the production backend settings for `admin/config.yml` with the correct repository and branch.
