import React, {
  AppRegistry,
  Component,
  Navigator,
  Text,
} from 'react-native';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class ReactNativeReduxPluralsight extends Component {
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
    onAddStarted() {
      this.nav.push({
        name: 'taskform',
    });
  }

    renderScene(route, nav) {
      switch (route.name) {
      case 'taskform':
          return (
            <TaskForm />
          );
      default:
          return (
            <TaskList
            onAddStarted={ this.onAddStarted.bind(this) }
            todos={this.state.todos} />
          );
        }
    }

    render() {
      return (
        <Navigator
        initialRoute={{ name: 'taskform', index: 0 }}
        renderScene={this.renderScene.bind(this)}
        ref={((nav) => {
            this.nav = nav;
        })}
    />
    );
  }
}

AppRegistry.registerComponent('ReactNativeReduxPluralsight', () => ReactNativeReduxPluralsight);
