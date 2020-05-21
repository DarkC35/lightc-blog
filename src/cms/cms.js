import CMS from "netlify-cms-app"

/**
 * Optionally pass in a config object. This object will be merged into `config.yml` if it exists
 */

CMS.init({
  config: {
    backend: {
      base_url: process.env.BACKEND_BASE_URL || "https://lightc-github-oauth-provider.herokuapp.com",
    },
  },
})