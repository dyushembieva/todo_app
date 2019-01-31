import React, {Component} from 'react'

class Checkbox extends Component {
    onChangeCheckBox = (indexText) => {
        let newArrayOfTodoList = this.props.todoList;
        let todo = newArrayOfTodoList[indexText];
        todo.completed = !todo.completed;

        this.setState({
            todoList: newArrayOfTodoList
        })
    };

    render() {
        return (
            <div className="text-left" style={{float: 'left'}}>
                <form action="" onSubmit={this.props.onSubmitText.bind(this.props.item, this.props.index)} >
                <input className="checkbox" type="checkbox" onChange={this.onChangeCheckBox.bind(this.props.item, this.props.index)}
                       id={this.props.item.id} checked={this.props.item.completed}/>

                {this.props.item.isEdit ?


                    <input type="text"  value={this.props.editValue} onChange={this.props.onChangeEdit.bind(this.props.item, this.props.index)}/>

                    :<label htmlFor={this.props.item.id}
                           className={this.props.item.completed ? 'checked' : 'unChecked'}>{this.props.item.text} </label>
                }
                </form>

            </div>
        );
    }
}

export default Checkbox