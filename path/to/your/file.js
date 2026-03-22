function save_feedback_to_firebase(feedback) {
    // Assuming feedback is an object containing user feedback data
    // Adding user_id to the feedback document
    const feedbackDocument = {
        ...feedback,
        user_id: feedback.user_id || 'default_user_id', // Ensure user_id is included
    };

    // Code to save feedbackDocument to Firebase
    firebase.firestore().collection('feedbacks').add(feedbackDocument) // Replace with actual Firebase save code
        .then(() => {
            console.log('Feedback saved successfully.');
        })
        .catch((error) => {
            console.error('Error saving feedback: ', error);
        });
}