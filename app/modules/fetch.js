'use strict';

import 'isomorphic-fetch';
import _ from 'lodash';
import appConfig from '../../config/app';

const methods = ['get', 'post'];

methods.forEach(function(method){
  exports[method] = function (path, options) {
    const url = __SERVER__ ? `${appConfig.url}:${appConfig.port}${path}` : path;
    return fetch(url, _.extend({method}, options)).then(res => res.json());
  };
});
