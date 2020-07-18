import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <form className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="What are you think about now?"
                    className="form-control new-post-label"
                    />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary">
                    Add</button>
            </form>
        )
    }
}