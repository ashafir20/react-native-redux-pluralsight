import React, {
  Component,
  Navigator,
} from 'react-native';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class PluralTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          todos: [
            {
                task: 'Learn React Native',
            },
            {
                task: 'Learn React',
            },
        ],
      };
    }

    onDone(todo) {
      console.log(todo.task);
      const filteredTodos = this.state.todos.filter((filterTodo) => filterTodo !== todo);
      this.setState({ todos: filteredTodos });
    }

    onAddStarted() {
       this.nav.push({
          name: 'taskform',
      });
   }

    onCancel() {
        this.nav.pop();
    }

    onAdd(todo) {
        this.state.todos.push({ task: todo });
        this.setState({ todos: this.state.todos });
        this.nav.pop();
    }

    renderScene(route, nav) {
        switch (route.name) {
      case 'taskform':
          return (
            <TaskForm onCancel={this.onCancel.bind(this)} onAdd={this.onAdd.bind(this)} />
          );
      default:
          return (
            <TaskList
              onAddStarted={this.onAddStarted.bind(this)}
              onDone={this.onDone.bind(this)}
              todos={this.state.todos}
          />
          );
      }
    }

    render() {
        return (
        <Navigator
          initialRoute={{ name: 'tasklist', index: 0 }}
          renderScene={this.renderScene.bind(this)}
          ref={((nav) => {
            this.nav = nav;
        })}
      />
    );
    }
}

export default PluralTodo;
