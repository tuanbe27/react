/* eslint-disable jsx-a11y/anchor-is-valid */
const Sort = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Action
        </a>
        <a class="dropdown-item" href="#">
          Another action
        </a>
        <a class="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
    // <div className="dropdown">
    //     <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    //         Sort by <span className="caret" />
    //     </button>
    //     <ul className="dropdown-menu">
    //         <li><a role="button">Name ASC</a></li>
    //         <li><a role="button">Name DESC</a></li>
    //         <li role="separator" className="divider" />
    //         <li><a role="button">Level ASC</a></li>
    //         <li><a role="button">Level DESC</a></li>
    //     </ul>
    //     <span className="label label-success label-medium">NAME - DESC</span>
    // </div>
  );
};

export default Sort;
