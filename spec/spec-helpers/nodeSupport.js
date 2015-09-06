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
 * causes a number of tests to fail with assertions deep inside babel-core.
 * However, not using it causes tests to fail when a clean cache is expected!
 */
global.mockSetup = (options = { warnOnUnregistered: false }) => {
  mockery.enable(options);
};
global.mockTearDown = () => {
  mockery.disable();
  mockery.deregisterAll();
};
