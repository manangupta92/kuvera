import React from "react";

class Details extends React.Component {
  state = {
    detailsData: null
  };
  loadDetailsData = () => {
    const url =
      "https://api.kuvera.in/api/v3/funds/" +
      this.props.match.params.code +
      ".json";
    return fetch(url).then(response => response.json());
  };
  componentDidMount() {
    this._asyncDetailsRequest = this.loadDetailsData().then(detailsData => {
      console.log(detailsData);
      this._asyncRequest = null;
      this.setState({ detailsData });
    });
  }
  details = () => {
    var rowstoReturn = [];
    for (var i = 0; i < Object.keys(this.state.detailsData[0]).length; i++) {
      if (typeof Object.values(this.state.detailsData[0])[i] === "string")
        rowstoReturn.push(
          <tr key={Object.keys(this.state.detailsData[0])[i]}>
            <td>{Object.keys(this.state.detailsData[0])[i]}</td>
            <td>{Object.values(this.state.detailsData[0])[i]}</td>
          </tr>
        );
    }
    return rowstoReturn;
  };
  render() {
    if (this.state.detailsData === null) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <h2>Details of Mutual Fund</h2>
          <table className="striped">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>{this.details()}</tbody>
          </table>

          <h3>
            <a href="/">Go back</a>
          </h3>
        </div>
      );
    }
  }
}

export default Details;
