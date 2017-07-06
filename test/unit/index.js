
import chai from 'chai';
import asserttype from 'chai-asserttype';
import IndexSpec from './specs/index.spec';

chai.use(asserttype);

global.expect = chai.expect;

IndexSpec();
