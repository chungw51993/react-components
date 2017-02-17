class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onListHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return(
      <li style={style} onMouseEnter={this.onListHover.bind(this)} onMouseLeave={this.onListHover.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

var List = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={["Cucumber", "Kale"]}/>
  </div>
);


ReactDOM.render(<List items={["Cucumber", "Kale"]}/>, document.getElementById("app"));
