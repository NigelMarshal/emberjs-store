import EmberRouter from '@ember/routing/router';
import config from 'emberjs-store/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clothes', function () {
    this.route('t-shirt');
  });
  //Dynamic ID for unique items
  this.route('item', { path: '/item/:item_id' });
  //404
  this.route('not-found', { path: '/*path' });
});
