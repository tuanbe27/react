const List = (props) => {
  return (
    <div className="panel panel-success">
      <div className="panel-heading">
        <h2>List Task</h2>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>
              <span>Name</span>
            </th>
            <th style={{ width: "15%" }} className="text-center">
              Priority
            </th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>{props.items}</tbody>
      </table>
    </div>
  );
};

export default List;
