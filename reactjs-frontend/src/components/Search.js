import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    backgroundColor:"#E0E0E0"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
export default function Search(props) {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Customer Id"
        inputProps={{ 'aria-label': 'search' }}
        value={props.q}
        onChange={(e) => props.setQ(e.target.value)}        
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" >
        <SearchIcon />
      </IconButton>      
    </Paper>
  );
}