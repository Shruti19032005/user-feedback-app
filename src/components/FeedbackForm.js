// src/components/FeedbackForm.js
import React, { Component } from 'react';
import './FeedbackForm.css'; // Import the CSS file for styling

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            submitted: false,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, comment } = this.state;
        alert(`Thank you for your feedback, ${name}!\nYour comment: "${comment}"`);
        
        // Reset the form
        this.setState({
            name: '',
            comment: '',
            submitted: true,
        });
    };

    render() {
        const { name, comment, submitted } = this.state;

        return (
            <div className="feedback-form-container">
                <h2>User Feedback</h2>
                <form className="feedback-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={this.handleInputChange}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={comment}
                            onChange={this.handleInputChange}
                            required
                            className="form-textarea"
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit Feedback</button>
                    {submitted && <p className="thank-you-message">Thank you for your feedback!</p>}
                </form>
            </div>
        );
    }
}

export default FeedbackForm;
