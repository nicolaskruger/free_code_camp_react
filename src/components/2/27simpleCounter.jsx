class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
      ['increment','decrement','reset'].forEach(k=>{
          this[k] = this[k].bind(this);
      })

      // Change code above this line
    }
    // Change code below this line
    increment(){
        this.setState({
            count: (++this.state.count)
        })
    }
    decrement(){
        this.setState({
            count: (--this.state.count)
        })
    }
    reset(){
        this.setState({
            count: 0
        })
    }
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };