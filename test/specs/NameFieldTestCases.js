/**
 * Created by Deepika Lalwani on 08/02/2017.
**/
 describe('Name', function () {
    browser.url('http://qa-case-study.hydrane.com/');

    it('should not set value for a Name element', function () {
        browser.timeoutsImplicitWait(30);
        var name = $('#name');
        name.setValue('');
        // same as
        browser.setValue('#name', '');
        (name.getValue()).should.be.equal(''); // outputs: ''
    });

    it('should set value "DL02" for a Name element', function () {
        browser.timeoutsImplicitWait(30);
        var name = $('#name');
        name.setValue('DL02');
        // same as
        browser.setValue('#name', 'DL02');
        (name.getValue()).should.be.equal('DL02'); // outputs: 'DL02'
    });
    it('should set value "Deepika" for a Name element', function () {
        browser.timeoutsImplicitWait(30);
        var name = $('#name');
        name.setValue('Deepika');
        // same as
        browser.setValue('#name', 'Deepika');
        (name.getValue()).should.be.equal('Deepika'); // outputs: 'Deepika'
    });
});