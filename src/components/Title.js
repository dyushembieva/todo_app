import React, {Component} from 'react'


class Title extends Component {

    onsubmit = (e) => {
        if (this.props.value !== '') {
            this.props.addItem();
        }

        e.preventDefault()

        this.props.changeValue('')
    };

    render() {
        return (
        <form action="" onSubmit={this.onsubmit}>
            <div className="title">
                <label>Title</label>
                <input type="text" placeholder="Title" className="input" onChange={this.props.changeInput} value={this.props.value}/>

            </div>
        </form>
        );
    }
}

export default Title