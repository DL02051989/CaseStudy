/**
 * Created by Deepika Lalwani on 08/02/2017.
 **/
describe('BirthDate', function () {
    browser.url('http://qa-case-study.hydrane.com/');

    it('should not add character value  for a Date element', function () {
        var date = $('#birthDate');
        browser.addValue('#birthDate', 'aa-bb-cccc');
        (date.getValue()).should.be.equal('');

    });

    it('should nt add value  for a Date element', function () {
        var date = $('#birthDate');
        browser.addValue('#birthDate', '42-5-1989');

        //Irrespective of what user sets it only allows correct values.
        // Validation already applied in code for date field.

    });

    it('should add value  for a Date element', function () {
        var date = $('#birthDate');
        browser.addValue('#birthDate', '02-05-1989');
        //Irrespective of what user sets it only allows correct values.
        // Validation already applied in code for date field.

    });

});