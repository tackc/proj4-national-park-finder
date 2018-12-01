import React, {Component} from 'react';
import './SearchForParks.css';

class SearchForParks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateCode: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.stateCodeInput = React.createRef()
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.liftStateCodeToState(e.target.stateCode)
    }

    render() {
        return (
        <div className="StateSearchBox">
            <div className="RefForms">
                <section>
                    <h3>Please enter a 2-character state code</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="stateCode" ref={this.stateCodeInput}/>
                        <input type="submit" />
                    </form>
                </section>
            </div>
        </div>
        );
    }
}

export default SearchForParks;