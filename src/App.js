import React, { Component } from "react";
import Fruits from "./Fruits";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: [
        { name: "lemon", cost: 2 },
        { name: "mango", cost: 3 },
        { name: "banana", cost: 5 }
      ],
      clickedCount: 0
    };
  }
  clickHandler = () => {
    const oldCount = this.state.clickedCount;
    const newCount = oldCount + 1;
    this.setState({
      clickedCount: newCount
    });
  };

  // itemClicked = () => {
  //   this.setState(prevState => {
  //     return {
  //       clickedCount: prevState.clickedCount + 1
  //     };
  //   });
  // };

  render() {
    return (
      <div>
        {this.state.fruits.map(items => {
          return (
            <Fruits
              name={items.name}
              cost={items.cost}
              itemClicked={this.clickHandler}
            />
          );
        })}
        <p
          style={{
            textAlign: "center",
            fontSize: 20,
            backgroundColor: "yellow"
          }}
        >
          {this.state.clickedCount}
        </p>
      </div>
    );
  }
}

export default App;
