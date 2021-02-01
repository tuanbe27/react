import FormDialog from "./Alert/HandleAddAndEdit";

const Item = (props) => {
  return (
    <tr>
      <td className="text-center">{props.stt}</td>
      <td style={{ cursor: "pointer" }} onClick={() => props.showEditDialog()}>
        {props.name}
      </td>
      <td className="text-center">
        <span className={props.class}>{props.level}</span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-warning btn-sm"
          onClick={() => props.showEditDialog()}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => props.showDeleteAlert(props.id)}
        >
          Delete
        </button>

        {props.isEdit && (
          <FormDialog
            title="Update task infomartion"
            description="Please enter your information here to update your task."
            isOpen={props.isOpen}
            close={(updateData) =>
              props.closeEditDialog({ ...updateData, id: props.id })
            }
            name={props.name}
            level={props.level}
            id={props.id}
            key={props.id}
          />
        )}
      </td>
    </tr>
  );
};

export default Item;
