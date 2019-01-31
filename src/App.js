import React, { Component } from 'react';
import './App.css';
import RemoveButton from './components/RemoveButton'
import Title from './components/Title'
import MainTitle from './components/MainTitle'
import Checkbox from './components/Checkbox'
import { connect,  } from 'react-redux'
import { addTodo, deleteTodo } from './actions/'
// import { todos } from './reducers/todos'
import {bindActionCreators} from 'redux'


class TodoList extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            newText: '',
            todoList: props.todos,
            styleCheckbox: {textDecoration: 'none'},
            isEdit: false,
            newArray: []
        }
    }


    addItem = () => {
        this.props.addTodo(this.state.todoList.length +1,  this.state.textValue, false, false)
    };

    onChangeInput = (textValue) => {
        this.setState({
            textValue: textValue.target.value
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

    onRemoveAllTask = () => {
        this.setState({
            todoList: []
        })
    };

    onRemoveCompletedTask = () => {
        let allCompletedTask = this.state.todoList.filter((task) => {
            return task.checked !== true
        });

        this.setState({
            todoList: allCompletedTask
        })
    };

    render() {
      return (
          <div className='container'>
              <MainTitle title={'Todo-list'}
              />
              <Title addItem={this.addItem}
                     value={this.state.textValue}
                     changeValue={this.changeValue}
                     changeInput={this.onChangeInput}
              />
              <div className="content">
                  {
                      this.props.todos.map((item, index) => {

                          return (
                              <div className='list'>
                                <Checkbox todoList={this.props.todos}
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
                                                    todoList={this.props.todos}
                                                    index={index}
                                                    onRemoveTodo={this.props.deleteTodo}

                                      />
                                      <input className="btn-edit" type="button" onClick={this.onEdit.bind(item, index)}/>
                                  </div>
                                  <div className="clear"></div>

                              </div>
                          )
                      })
                  }
                  <div className="push"></div>
              </div>

              <div className="footer">
                  <div className="button-item">
                      <button className="btn" onClick={this.onRemoveCompletedTask}>REMOVE COMPLETED ALL</button>
                      <button className="btn btn-left" onClick={this.onRemoveAllTask}>REMOVE ALL</button>
                      <div className="clear"></div>
                  </div>
              </div>
          </div>
      );
  }
}


function mapStateToProps (state) {
    return {
        todos: state.todos
    }
}

// mapStateToProps
//MapDispatch ToProps
//BIndActionCreators


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: bindActionCreators(addTodo, dispatch),
        deleteTodo: bindActionCreators(deleteTodo, dispatch)
    }

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


