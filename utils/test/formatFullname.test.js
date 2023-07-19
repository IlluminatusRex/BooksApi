const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;
describe('formatFullname', () => {

    it('should return CORRECT Name Lastname content', () => {
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('JOHN doE')).to.equal('John Doe');
    });

    it('should return "Error" if nothing is provided', () => {
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
    });
    
    it('should return "Error" if input is not a string', () => {
        expect(formatFullname(123)).to.equal('Error');
        expect(formatFullname(null)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
    });
    
    it('should return "Error" if the input format is not <firstname> <lastname>', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
    });

});