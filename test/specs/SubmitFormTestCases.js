/**
 * Created by Deepika Lalwani on 08/02/2017.
 **/

// Bug: Mobile view--> Hamburger icon is not working.

describe('Submit', function () {

    browser.newWindow('http://qa-case-study.hydrane.com/', 'CaseStudy', 'width=420,height=230,resizable,scrollbars=yes,status=1'); // Mobile view
    it('should  be able to submit the form ', function () {

        browser.setValue('#name', 'DeL');
        browser.addValue('#birthDate', '02-05-1989');
        var FireselectBox = $('#affinity');
        FireselectBox.selectByValue('fire');

        var PowerSelectBox = $('#power');
        PowerSelectBox.selectByValue("0: 'meteor'");
        PowerSelectBox.selectByValue("1: 'spear'");
        PowerSelectBox.selectByValue("2: 'rain'").isDisabled; //similar check for rest of the disabled elements.
        var agreementBox = $('.form-check-label');
        agreementBox.click();
        var submitButton = $(".btn");
        submitButton.click();
        browser.waitUntil(function () {
            return $("li.nav-item.active a").getAttribute("href") === "http://qa-case-study.hydrane.com/members";
        }, 20000, 'check the members value');


    });

    it('should not be able to submit the form as no name is entered', function () {

        browser.setValue('#name', '');
        browser.addValue('#birthDate', '02-05-1989');
        var FireselectBox = $('#affinity');
        FireselectBox.selectByValue('fire');

        var PowerSelectBox = $('#power');
        PowerSelectBox.selectByValue("0: 'meteor'");
        PowerSelectBox.selectByValue("1: 'spear'");
        var agreementBox = $('.form-check-label');
        agreementBox.click();
        var submitButton = $(".btn");
        submitButton.click();
        browser.waitUntil(function () {
            return $("li.nav-item.active a").getAttribute("href") === "http://qa-case-study.hydrane.com/register";
        }, 20000, 'Unsuccessfull redirection to members page');

    });

    it('should not be able to submit the form as not birth date is selected ', function () {

        browser.setValue('#name', 'DeL');
        browser.addValue('#birthDate', '');
        var FireselectBox = $('#affinity');
        FireselectBox.selectByValue('fire');

        var PowerSelectBox = $('#power');
        PowerSelectBox.selectByValue("0: 'meteor'");
        PowerSelectBox.selectByValue("1: 'spear'");
        var agreementBox = $('.form-check-label');
        agreementBox.click();
        var submitButton = $(".btn");
        submitButton.click();
        browser.waitUntil(function () {
            return $("li.nav-item.active a").getAttribute("href") === "http://qa-case-study.hydrane.com/register";
        }, 20000, 'Unsuccessfull redirection to members page');

    });

    it('should not be able to submit the form as no Affinity is selected', function () {

        browser.setValue('#name', 'DeL');
        browser.addValue('#birthDate', '02-05-1989');
        var FireselectBox = $('#affinity');
        FireselectBox.selectByValue('');

        var PowerSelectBox = $('#power');
        PowerSelectBox.selectByValue("0: 'meteor'");
        PowerSelectBox.selectByValue("1: 'spear'");
        var agreementBox = $('.form-check-label');
        agreementBox.click();
        var submitButton = $(".btn");
        submitButton.click();
        browser.waitUntil(function () {
            return $("li.nav-item.active a").getAttribute("href") === "http://qa-case-study.hydrane.com/register";
        }, 20000, 'Unsuccessfull redirection to members page');

    });

    it('should not be able to submit the form as no Power is selected', function () {

        browser.setValue('#name', 'DeL');
        browser.addValue('#birthDate', '02-05-1989');
        var FireselectBox = $('#affinity');
        FireselectBox.selectByValue('fire');

        var PowerSelectBox = $('#power');
        PowerSelectBox.selectByValue("");
        var agreementBox = $('.form-check-label');
        agreementBox.click();
        var submitButton = $(".btn");
        submitButton.click();
        browser.waitUntil(function () {
            return $("li.nav-item.active a").getAttribute("href") === "http://qa-case-study.hydrane.com/register";
        }, 20000, 'Unsuccessfull redirection to members page');

    });

    it('should not be able to submit the form as no agreement checked', function () {

        browser.setValue('#name', 'DeL');
        browser.addValue('#birthDate', '02-05-1989');
        var FireselectBox = $('#affinity');
        FireselectBox.selectByValue('fire');

        var PowerSelectBox = $('#power');
        PowerSelectBox.selectByValue("");
        var submitButton = $(".btn");
        submitButton.click();
        browser.waitUntil(function () {
            return $("li.nav-item.active a").getAttribute("href") === "http://qa-case-study.hydrane.com/register";
        }, 20000, 'Unsuccessfull redirection to members page');

    });

    it('should not be able to submit the form as form is empty', function () {

        browser.setValue('#name', '');
        browser.addValue('#birthDate', '');
        var FireselectBox = $('#affinity');
        FireselectBox.selectByValue('');

        var PowerSelectBox = $('#power');
        PowerSelectBox.selectByValue("");
        var submitButton = $(".btn");
        var agreementBox = $('.form-check-label');
        submitButton.click();
        browser.waitUntil(function () {
            return $("li.nav-item.active a").getAttribute("href") === "http://qa-case-study.hydrane.com/register";
        }, 20000, 'Unsuccessfull redirection to members page');

    });
});