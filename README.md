# Catopedia

### Setup
- clone repo
- install yarn (https://yarnpkg.com/en/docs/install)
- run `yarn install` on base directory of repo
- run `yarn start` to start server
- open `localhost:3000` and look for cats

### Issues
- Fonts are loaded in externally, hence slow load time. Ideally
would be moved to a local file and webpack needs to be setup to
deal specifically with them
- Carousel like button does not work, need to pass a function through
better to trigger the like
- In line with above, the likes are kept temporarily and not ideally.
See `ListContainer -> handleLike`. Redux/flux needs to be setup for
managing the state better. Click would then trigger an action to update
the state of the whole app and send it to the server.
- Didn't have time to do breadcrumbs