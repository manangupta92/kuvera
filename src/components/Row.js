import React from "react";

class Row extends React.Component {
  //Showing only first 100 results
  render() {
    return (
      <>
        {this.props.funds.slice(0, 100).map(funds => (
          <tr key={funds.code}>
            <td>
              <a href={funds.code}>{funds.name}</a>
            </td>
            <td>{funds.category}</td>
            <td>{funds.fund_type}</td>
            <td>{funds.plan}</td>
            <td>{funds.returns.year_1}</td>
            <td>{funds.returns.year_3}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default Row;
