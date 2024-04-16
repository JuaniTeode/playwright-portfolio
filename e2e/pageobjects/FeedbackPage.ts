import { Locator, Page } from '@playwright/test'

export class FeedbackPage {
    // Define selectors
    readonly page: Page
    readonly feedback: Locator
    readonly yourName: Locator
    readonly yourAdress: Locator
    readonly subject: Locator
    readonly comment: Locator
    readonly clear: Locator
    readonly submit: Locator
    readonly feedbackTitle: Locator
    readonly commentText: string

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.feedback = page.locator('#feedback');
        this.yourName = page.locator('#name');
        this.yourAdress = page.locator('#email');
        this.subject = page.locator('#subject');
        this.comment = page.locator('#comment');
        this.clear = page.locator("input[type='reset']")
        this.submit = page.locator("input[type='submit']")
        this.feedbackTitle = page.locator('#feedback-title')

        this.commentText =('some nice comment about the application')

    }
}