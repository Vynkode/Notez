import React, { Component } from 'react';
import './css/note.css'

const initialState = {
    note_name:'',
    note_content:''
}

class createNote extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    onChangeNoteName = (event) => {
        this.setState({
            note_name: event.target.value
        });
    }

    onChangeNoteContent = (event) => {
        this.setState({
            note_content: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        // console.log('Note Created');
        // console.log(`Note Name: ${this.state.note_name}`);
        // console.log(`Note Content: ${this.state.note_content}`);

        this.setState(initialState);
    }

    render() {
        return (
            <div className="top-div">
                <h3>Create a New Note</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Note Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.note_name}
                                onChange={this.onChangeNoteName}
                                required
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter Note:</label>
                        <textarea   className="form-control"
                                    rows="10" cols="50"
                                    value={this.state.note_content}
                                    onChange={this.onChangeNoteContent}
                                    required
                                    />
                    </div>    
                    <div className="form-group">
                        <input  type="submit" 
                                value="Create Note" 
                                className="btn btn-primary" 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default createNote;