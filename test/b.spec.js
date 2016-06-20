import chai from 'chai';
import b from 'b';

const expect = chai.expect;

describe('b', () => {
  it('should contain a', () => {
    expect(b).to.equal('a');
  });
});
