import React, {Component} from 'react'


class RemoveButton extends Component {





    onRemove = (e) => {
        this.props.onRemoveTodo(e, this.props.todoList)


    };

    render() {
        return(
            <input className="btn-delete" type="button" onClick={this.onRemove.bind(this.props.item, this.props.index)}/>
        )
    }
}

export default  RemoveButton