import { test, expect } from '@playwright/test'
import { FeedbackManager } from '../managers/feedbackManager';
import assertionManager from '../managers/assertionManager'
import { urls } from '../testdata/testdata';
import { FeedbackPage } from '../pageobjects/FeedbackPage';

test.describe('Feedback Flow', () => {

    let feedbackPage: FeedbackPage
    let feedbackManager: FeedbackManager

    test.beforeEach(async ({ page }) => {
        feedbackPage = new FeedbackPage(page)
        feedbackManager = new FeedbackManager(feedbackPage)

        await page.goto(urls.baseUrl)
        await feedbackPage.feedback.click()
    })

    test('Reset feedback form', async ({ page }) => {
        await feedbackManager.fillFeedbackForm()
        await feedbackPage.clear.click()

        await assertionManager.assertFeebackFieldsAreClear(feedbackPage.yourName, feedbackPage.yourAdress, feedbackPage.subject, feedbackPage.comment)
    })

    test('Submit feedback form', async ({ page }) => {
        await feedbackManager.fillFeedbackForm()
        await feedbackPage.submit.click()

        await expect(feedbackPage.feedbackTitle).toBeVisible();    
    })

})