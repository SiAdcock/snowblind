'use strict';

import 'isomorphic-fetch';
import appConfig from '../../config/app';

const methods = ['get', 'post'];

methods.forEach((method) => {
  exports[method] = (path, options) => {
    const url = __SERVER__ ? `${appConfig.url}:${appConfig.port}${path}` : path;

    return fetch(url, Object.assign({ method }, options))
      .then(res => res.json());
  };
});
