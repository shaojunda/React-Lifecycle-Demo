import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Father extends React.Component {
  constructor() {
    super();
    this.state = {
      showApp: true
    };
  }

  killSon() {
    this.setState({
      showApp: false,
      word: null
    });
  }

  say() {
    this.setState({
      word: "好好学习"
    });
  }

  render() {
    return (
      <div>
        我是你爸爸
        {this.state.showApp === true ? <App word={this.state.word} /> : null}
        <button
          onClick={() => {
            this.killSon();
          }}
        >
          kill son
        </button>
        <button
          onClick={() => {
            this.say();
          }}
        >
          say something
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    console.log("创建 APP");
    super();
    this.state = {
      num: 0
    };
  }

  onClick() {
    console.log("用户点击了");
    this.setState({ num: this.state.num + 1 });
  }

  componentWillMount() {
    console.log("APP 将要 Amount");
  }

  render() {
    console.log("mount APP");
    return (
      <div className="App">
        爸爸说 {this.props.word}
        {this.state.num} <button onClick={this.onClick.bind(this)}>+1</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("APP Amount 完毕");
  }

  componentWillUpdate() {
    console.log("APP 将要更新");
  }

  componentDidUpdate() {
    console.log("APP 更新完毕");
  }

  componentWillUnmount() {
    console.log("APP 要挂了");
  }

  componentWillReceiveProps() {
    console.log("爸爸发话了");
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Father />, rootElement);
