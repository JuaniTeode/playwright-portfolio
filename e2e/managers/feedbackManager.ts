import { FeedbackPage } from "../pageobjects/FeedbackPage";
import { users } from "../testdata/testdata";

export class FeedbackManager {

    private readonly feedbackPage: FeedbackPage;

    constructor(feedbackPage: FeedbackPage) {
        this.feedbackPage = feedbackPage;
    }

    /**
     * Fills out the feedback form with the provided data.
     * 
     * @returns {Promise<void>} - A Promise that resolves when the form is filled out.
     */
    public async fillFeedbackForm(): Promise<void> {
        await this.feedbackPage.yourName.fill(users.user.name)
        await this.feedbackPage.yourAdress.fill(users.user.email)
        await this.feedbackPage.subject.fill('Some subject')
        await this.feedbackPage.comment.fill(this.feedbackPage.commentText)
    }
}
