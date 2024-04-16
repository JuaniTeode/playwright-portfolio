import { test, expect } from '@playwright/test'

test.describe('Search Results', () => {
    test('Should find search results', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.fill('#searchTerm', 'bank')
        await page.keyboard.press('Enter')

        const numberOfLinks = page.locator('li > a')
        await expect(numberOfLinks).toHaveCount(2)
    })
})