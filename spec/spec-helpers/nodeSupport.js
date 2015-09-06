'use strict';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import mockery from 'mockery';
import sinon from 'sinon';

chai.use(chaiAsPromised);

global.expect = chai.expect;
global.sinon = sinon;
global.mockery = mockery;
/**
 * FIXME
 * something is seriously going wrong here. Sometimes useCleanCache
 * causes istanbul to fail. However, not using it causes individual
 * tests to fail when a clean cache is expected.
 */
global.mockSetup = (options = { warnOnUnregistered: false, useCleanCache: true }) => {
  mockery.enable(options);
};
global.mockTearDown = () => {
  mockery.disable();
  mockery.deregisterAll();
};
