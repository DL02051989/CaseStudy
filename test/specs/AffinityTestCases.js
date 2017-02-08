/**
 * Creating single test case file as selection of Power is somehow dependent on Affinity
 */

describe('Affinity', function () {
    browser.url('http://qa-case-study.hydrane.com/');

    it('should set value for a Affinity and Power element', function () {
        var FireselectBox = $('#affinity');
            FireselectBox.selectByValue('fire');
            console.log(FireselectBox.getValue()); // returns "fire"
            FireselectBox.getText('option:checked');

        var PowerSelectBox = $('#power')

            PowerSelectBox.selectByValue("0: 'meteor'");
            PowerSelectBox.selectByValue("1: 'spear'");
            console.log(PowerSelectBox.getValue());
            FireselectBox.getText('option:checked');

    });
});