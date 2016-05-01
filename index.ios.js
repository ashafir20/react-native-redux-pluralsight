import React, {
  AppRegistry,
  Component,
} from 'react-native';
import TaskList from './TaskList';

class ReactNativeReduxPluralsight extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn react native',
        },
        {
          task: 'learn react',
        },
      ],
    };
  }

  render() {
    return (
      <TaskList todos={this.state.todos} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeReduxPluralsight', () => ReactNativeReduxPluralsight);
