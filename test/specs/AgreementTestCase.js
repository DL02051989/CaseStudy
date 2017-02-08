/**
 * Created by Deepika Lalwani on 08/02/2017.
 **/
describe('Agreement', function () {
    browser.url('http://qa-case-study.hydrane.com/');

    it('should have the agreement checked ', function () {
        var agreementBox = $('.form-check-label').click();
    });
});