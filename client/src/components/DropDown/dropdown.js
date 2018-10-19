import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class MenuListComposition extends React.Component {
    constructor(props)
    {
        super(props);
        this.OnChangeFunction = this.OnChangeFunction.bind(this);
    }

    handleClose = event =>
    {
        if(this.anchorEl.contains(event.target))
        {
            return;
        }
    }

    OnChangeFunction(value)
    {
        console.log("item changed");
        console.log(value);
        this.props.MenuSelection(value);
    }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={this.props.open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={this.props.toggleButton}
          >
            Menu
          </Button>
          <Popper open={this.props.open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.props.HandleClick}>
                    <MenuList >
                      <MenuItem onClick={() => this.OnChangeFunction(0)}>Profile</MenuItem>
                      <MenuItem onClick={() => this.OnChangeFunction(1)}>My account</MenuItem>
                      <MenuItem onClick={() => this.OnChangeFunction(2)}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);
