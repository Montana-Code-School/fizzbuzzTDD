const chai = require('chai');
const fb = require('../fb.js');

const expect = chai.expect;

describe('FizzBuzz TDD - checker should establish unit checks', function () {
  it('should return fizz for any multiple of 3', function () {
    expect(fb.checker(3)).to.equal('fizz');
    expect(fb.checker(6)).to.equal('fizz');
    expect(fb.checker(33)).to.equal('fizz');
  });

  it('should return buzz for any multiple of 5', function () {
    expect(fb.checker(5)).to.equal('buzz');
    expect(fb.checker(10)).to.equal('buzz');
    expect(fb.checker(20)).to.equal('buzz');
  });

  it('should return fizzbuzz for any multiple of 3 and 5', function () {
    expect(fb.checker(15)).to.equal('fizzbuzz');
    expect(fb.checker(30)).to.equal('fizzbuzz');
    expect(fb.checker(45)).to.equal('fizzbuzz');
  });
});

describe('FizzBuzz TDD - iterator should loop from 0 to any number n', function () {
  it('should throw a \'no input given\' error if not given input', function () {
    expect(fb.iterator).to.throw(Error, 'input incorrect or undefined');
  });

  it('Optional - iterator should have default param to return array', function () {
    const expectedResult = [
      0,1,2,'fizz',4,'buzz','fizz',7,8,
      'fizz','buzz',11,'fizz',13,14,'fizzbuzz'
    ];
    expect(fb.iterator(15, true)).to.eql(expectedResult);
  });
});
