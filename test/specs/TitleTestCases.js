/**
 * Created by Deepika Lalwani on 08/02/2017.
 */
//Bug : http://qa-case-study.hydrane.com/register  should open. It gives not found error

describe('Title', function () {
    browser.url('http://qa-case-study.hydrane.com/');

    it('should have the right title ', function () {
        browser.timeoutsImplicitWait(30);
        var title = browser.getTitle();
        title.should.be.equal('CaseStudy');
    });
 });