import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

export default function FormDialog(props) {
  const priorityData = [
    {
      value: "Low",
      label: "Low",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "Hight",
      label: "Hight",
    },
  ];
  const [priority, setPriority] = useState("Low");
  const [name, setName] = useState("");
  // const [time, setTime] = useState(
  //   moment()
  //     .format()
  //     .slice(0, moment().format().length - 9)
  // );

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  // const handleChangeTime = (event) => {
  //   setTime(event.target.value);
  // };
  React.useEffect(() => {
    setPriority(props.level);
  }, [props.level]);

  React.useEffect(() => {
    setName(props.name);
  }, [props.name]);

  React.useEffect(() => {
    if (props.isNew) {
      setName("");
      setPriority("Low");
    }
  }, [props.isNew]);

  let newData;
  newData = { name, priority };
  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={() => props.close()}
        closeAfterTransition={true}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.description}</DialogContentText>
          <TextField
            margin="dense"
            label="Name"
            id="name"
            value={name}
            onChange={(e) => handleChangeName(e)}
            fullWidth
            error={name === ""}
            helperText="name is empty"
          />

          <TextField
            id="standard-select-level"
            select
            label="Select priority"
            value={priority}
            onChange={(e) => handleChangePriority(e)}
            helperText="Please select task priority"
          >
            {priorityData.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br></br>
          <br></br>
          {/* <TextField
            id="datetime-local"
            label="Set time"
            type="datetime-local"
            defaultValue={time}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChangeTime(e)}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.close(newData)} color="primary">
            Save
          </Button>
          <Button onClick={() => props.close()} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
