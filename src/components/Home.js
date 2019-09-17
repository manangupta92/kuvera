import React from "react";
import Row from "./Row";
class Home extends React.Component {
  state = {
    initialState: null,
    funds: []
  };
  compareBy = key => {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  sortBy = key => {
    var arrayCopy = [...this.state.initialState];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ funds: arrayCopy });
  };
  loadAsyncData = () => {
    const url = "https://api.kuvera.in/api/v3/funds.json";
    const datamodel = fetch(url).then(response => response.json());
    return datamodel;
  };
  componentDidMount() {
    this._asyncRequest = this.loadAsyncData().then(data => {
      //console.log(initialState);
      this._asyncRequest = null;
      this.setState({ funds: data, initialState: data });
    });
    //console.log(this.props);
  }
  handleChange = event => {
    var updatedList = this.state.initialState;
    updatedList = updatedList.filter(function(item) {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ funds: updatedList });
  };
  render() {
    if (this.state.initialState === null) {
      return <div>Loading...</div>;
    } else {
      //console.log(this.state);
      return (
        <div className="container">
          <h1>Kuvera Mutual funds</h1>
          <input
            className="search-input"
            placeholder="Search Mutual Funds..."
            onChange={this.handleChange}
          ></input>
          <table className="striped">
            <thead>
              <tr>
                <th
                  onClick={e => {
                    this.sortBy("name");
                  }}
                >
                  Name of fund
                </th>
                <th
                  onClick={e => {
                    this.sortBy("category");
                  }}
                >
                  Fund Category
                </th>
                <th
                  onClick={e => {
                    this.sortBy("fund_type");
                  }}
                >
                  Fund Type
                </th>
                <th
                  onClick={e => {
                    this.sortBy("plan");
                  }}
                >
                  Plan
                </th>
                <th>Year 1 Returns</th>
                <th>Year 3 Returns</th>
              </tr>
            </thead>
            <tbody>
              <Row funds={this.state.funds} />
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Home;
