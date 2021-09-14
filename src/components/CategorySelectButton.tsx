import React, { useContext } from 'react';
import {
  Tooltip,
  Button,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { AdviceContext } from '../context';
import { actionTypes } from '../context/actionTypes';

import { categories } from '../utils/categories';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      // marginRight: theme.spacing(5),
      marginTop: theme.spacing(5),
    },
    button: {
      backgroundColor: 'white',
      textTransform: 'capitalize',
      borderRadius: '0.5rem',
    },
  })
);

const CatergorySelectButton: React.FC = () => {
  const classes = useStyles();
  const { dispatch } = useContext(AdviceContext);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    dispatch({
      type: actionTypes.SET_CATEGORY,
      payload:
        +(event.target as HTMLInputElement).value === -1
          ? 'all'
          : categories[+(event.target as HTMLInputElement).value].name,
    });
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Tooltip title="Choose Catergory">
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="secondary"
            size="small"
            className={classes.button}
          >
            Categories
          </Button>
        </Tooltip>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={classes.paper}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      key="all"
                      value={-1}
                      onClick={(e) => {
                        handleClose(e);
                        handleClick(e);
                      }}
                    >
                      <em>All</em>
                    </MenuItem>
                    {categories.map((category, i) => (
                      <MenuItem
                        key={category._id}
                        value={i}
                        onClick={(e) => {
                          handleClose(e);
                          handleClick(e);
                        }}
                      >
                        {category.name} ({category.quoteCount})
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default CatergorySelectButton;
