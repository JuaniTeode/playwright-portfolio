import { test, expect } from '@playwright/test'
import { urls } from '../testdata/testdata'

test.describe('Search Results', () => {
    test.only('Should find search results', async ({ page }) => {
        await page.goto(urls.baseUrl)
        await page.fill('#searchTerm', 'bank')
        await page.keyboard.press('Enter')

        const numberOfLinks = page.locator('li > a')
        await expect(numberOfLinks).toHaveCount(2)
    })
})
