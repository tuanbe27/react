import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(4),
  },
}));

export default function FloatingActionButtonSize(props) {
  const classes = useStyles();
  return (
    <Fab
      size="small"
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={props.clicked}
    >
      <AddIcon />
    </Fab>
  );
}
