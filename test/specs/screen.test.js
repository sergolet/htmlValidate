const assert = require('assert')


const URL = process.env.URL || 'http://localhost:8080/index.html'; 


describe('check valid webpage', () => {

    before(async () => {
        await browser.url(URL);
        browser.setWindowSize(1024, 768);

    })

    it('check 1 part of the table', async () => {
        const firstCol = await browser.$('#column1');
        await firstCol.scrollIntoView();
        assert.equal(await browser.checkScreen('Table_sc1'), 0)
    }) 

    it('check 2 part of the table', async () => {
        const middleCol = await browser.$('#column11');
        await middleCol.scrollIntoView();
        assert.equal(await browser.checkScreen('Table_sc2'), 0)
    }) 

    it('check 3 part of the table', async () => {
        const lastRow = await browser.$('#rowlast1');
        await lastRow.scrollIntoView();
        assert.equal(await browser.checkScreen('Table_sc3'), 0)
    }) 

    it('check 4 part of the table', async () => {
        const  middleRow = await browser.$('#rowlast9');
        await middleRow.scrollIntoView();
        assert.equal(await browser.checkScreen('Table_sc4'), 0)
    }) 

})
