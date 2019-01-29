import React, {Component} from 'react'


class RemoveButton extends Component {
    onRemove = (e) => {
        let newArrayOfTodoList = this.props.todoList;
        newArrayOfTodoList.splice(e, 1);
        this.props.onRemoveTodoList(newArrayOfTodoList)
    };

    render() {
        return(
            <input className="btn-delete" type="button" onClick={this.onRemove.bind(this.props.item, this.props.index)}/>
        )
    }
}

export default  RemoveButton