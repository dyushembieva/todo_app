import React, { Component } from 'react';
import './App.css';
import RemoveButton from './components/RemoveButton'
import Title from './components/Title'
import MainTitle from './components/MainTitle'
import Checkbox from './components/Checkbox'


class TodoList extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            newText: '',
            todoList: [
            ],
            styleCheckbox: {textDecoration: 'none'},
            isEdit: false,
            newArray: []
        }
    }

    addItem = () => {
        let newItems = this.state.todoList;

        newItems.unshift({
            id: this.state.todoList.length + 1,
            title: this.state.textValue,
            checked: false,
            edit: false
        });

        this.setState({
            todoList: newItems
        })
    };

    onChangeInput = (textValue) => {
        this.setState({
            textValue: textValue.target.value
        })
    };

    onRemoveTodoList = (todoText) => {
      this.setState({
          todoList: todoText
      })
    };

    changeValue = (value) => {
      this.setState({
          textValue: value
      })
    };

    onEdit = (indexText) => {
        let newArrayOfTodoList = this.state.todoList;
        let todo = newArrayOfTodoList[indexText];
        todo.isEdit = true;

        this.setState({
            todoList: newArrayOfTodoList
        })
    };

    onChangeEdit = (text, index) => {
        let newArray = this.state.todoList;
        let todo = newArray[text];
        todo.title = index.target.value;
        console.log(newArray);

        this.setState({
            todoList: newArray
        })
    };

    onSubmitText = (text, index) => {
        console.log(index)
        index.preventDefault();

        let newArrayOfTodoList = this.state.todoList;
        let todo = newArrayOfTodoList[text];
        todo.isEdit = false;

        this.setState({
            todoList: newArrayOfTodoList
        })
    };

    render() {
      return (
          <div>
              <MainTitle title={'Todo-list'}
              />
              <Title addItem={this.addItem}
                     value={this.state.textValue}
                     changeValue={this.changeValue}
                     changeInput={this.onChangeInput}
              />
              <div className="content">
                  {
                      this.state.todoList.map((item, index) => {
                          return (
                              <div>
                                <Checkbox todoList={this.state.todoList}
                                          onChangeCheckBox={this.onChangeCheckBox}
                                          item={item}
                                          index={index}
                                          isEdit={this.state.isEdit}
                                          onChangeEdit={this.onChangeEdit}
                                          newText={this.state.newText}
                                          onSubmitText={this.onSubmitText}
                                />
                                  <div className="text-right">
                                      <RemoveButton item={item}
                                                    todoList={this.state.todoList}
                                                    index={index}
                                                    onRemoveTodoList={this.onRemoveTodoList}

                                      />
                                      <input className="btn-edit" type="button" onClick={this.onEdit.bind(item, index)}/>
                                  </div>

                              </div>
                          )
                      })
                  }
              </div>
          </div>
      );
  }
}

export default TodoList;
