import React, {Component} from 'react'

class Checkbox extends Component {
    onChangeCheckBox = (indexText) => {
        let newArrayOfTodoList = this.props.todoList;
        let todo = newArrayOfTodoList[indexText];
        todo.checked = !todo.checked;

        this.setState({
            todoList: newArrayOfTodoList
        })
    };

    render() {
        return (
            <div className="text-left" style={{float: 'left'}}>
                <form action="" onSubmit={this.props.onSubmitText.bind(this.props.item, this.props.index)} >
                <input className="checkbox" type="checkbox" onChange={this.onChangeCheckBox.bind(this.props.item, this.props.index)}
                       id={this.props.item.id} checked={this.props.item.checked}/>

                {this.props.item.isEdit ?


                    <input type="text"  className="input"  value={this.props.editValue} onChange={this.props.onChangeEdit.bind(this.props.item, this.props.index)}/>

                    :<label htmlFor={this.props.item.id}
                           className={this.props.item.checked ? 'checked' : 'unChecked'}>{this.props.item.title} </label>
                }
                </form>

            </div>
        );
    }
}

export default Checkbox