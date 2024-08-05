//
import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { FiEdit } from "react-icons/fi";
import todoicon from "../../Assets/todoicon.png";
import { IoAddCircleSharp } from "react-icons/io5";
import Box from "@mui/material/Box";
import { api } from "../../api/api";
import * as moment from "moment";
import Tooltip from "@mui/material/Tooltip";
import { IoTrashBinOutline ,IoNotifications} from "react-icons/io5";

import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { IoListCircleSharp } from "react-icons/io5";
import SignUpAlertPopMsg from "../Home/SignUpAlertPopMsg";
import styled from "styled-components";
import ReminderTodo from "./ReminderTodo";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {
    marginTop: "-0.45rem",
  },
  manuItem: {
    borderBottom: "1px solid #858796",
  },
  Button: {
    backgroundColor: "transparent",
  },
  todoDescription: {
    visibility: "hidden",
    fontSize: "0.7rem",
    color: "#2478dc",

    marginTop: "-12px",
  },
  topThirdIcon: {
    textAlign: "center",
    "&:hover $todoDescription": {
      visibility: "visible",
    },
  },
  Title: {
    backgroundColor: "#EBEBEB",
    borderRadius: "4px 4px 0px 0px",
    borderBottom: "solid 1px #e3e6f0",

    color: "#303f9f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "1rem",
    fontSize: "1.2rem",
    fontWeight: "700",
    letterSpacing: "0.09em",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem",
    },
  },

  DayDateDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "0.8rem",
    fontFamily: "Roboto",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
  DataMianDiv: {
    marginTop: "0.5rem",
  },
  checkBoxDataTimeMainDiv: {
    display: "flex",
    // alignItems: "center",

    fontSize: "0.9rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginTop: "0.3rem",
  },
  checkBoxx: {
    "&:nth-of-type(4n+1)": {
      color: "#D40078",
    },
    "&:nth-of-type(4n+2)": {
      color: "#FF6A00",
    },
    "&:nth-of-type(4n+3)": {
      color: "#3bc0c0",
    },
    "&:nth-of-type(4n+4)": {
      color: "#FF0000",
    },
    "&:nth-of-type(4n+5)": {
      color: "#57C000",
    },
    "&:nth-of-type(4n+6)": {
      color: "#d59a16",
    },
  },
  checkBoxData: {
    display: "flex",
    alignItems: "center",

    justifyContent: "space-between",
    gap: "1rem",
    cursor: "pointer",
    width: "100%",
    textAlign: "justify",

    "&:hover": {
      "& $deleteTodo": {
        display: "block",
      },
    },
    "&:nth-of-type(4n+1)": {
      borderBottom: "1px solid gray !important",
    },
    "&:nth-of-type(4n+2)": {
      borderBottom: "1px solid black !important",
    },
    "&:nth-child(4n + 3)": {
      color: "#00FFFF",
      borderBottom: "1px solid #00FFFF",
    },
    "&:nth-child(4n + 4)": {
      color: "#F27593",
      borderBottom: "1px solid #F27593",
    },
  },
  addNodeDiv: {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  countTaskClearAllMainDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid rgba(196, 196, 196, 0.4)",
    marginTop: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  clearIcon: {
    fontSize: "0.8rem",
    marginLeft: "0.4rem",
    verticalAlign: "middle",
    "&:hover": { color: "red" },
  },
  clearbutton: {
    fontSize: "1em",
    textTransform: "capitalize",
    "&:hover": {
      color: "red",
    },
  },
  addInputDiv: {
    backgroundColor: "#F4F1F1",

    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    paddingLeft: "1rem",
    paddingTop: "0.2rem",
    paddingBottom: "0.2rem",
  },
  addTaskFiled: {
    backgroundColor: "transparent",
    padding: "0.5rem 0.2rem 0.5rem 1rem",
    outline: "none",
    border: "0px solid #F4F1F1",
    width: "100%",
  },

  editTaskFiled: {
    width: "16rem",
    backgroundColor: "transparent",
    padding: "0.5rem 0.2rem 0.5rem 1rem",
    outline: "none",
    border: "0px solid #F4F1F1",
  },
  AddIcon: {
    color: "#4CAF50",
    fontSize: "1.5rem",
  },
  deleteTodo: {
    fontSize: "1rem",
    color: "#ed645a",
    display: "none",
  },
}));
const Root = styled.div`
  .edit {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .popper {
    width: 25rem;
    margin-top: 1.8rem;
    margin-right: 8rem;
    @media screen and (max-width: 1500px) {
      width: 23rem;
    }
    @media screen and (max-width: 450px) {
      width: 19rem;
    }
  }
`;

const Container = styled.div`
  .eachItem {
    height: 15rem;
    overflow-y: scroll;
    @media screen and (max-width: 1500px) {
      height: 12rem;
    }
    ::-webkit-scrollbar {
      width: 6.5px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }
  }
`;

export default function ToDoList() {
  const classes = useStyles();
  const [editMode, setEditMode] = useState("");

  const handleEditMode = (e) => {
    setEditMode(e.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState();

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    // let location = window.history.legth;
    // console.log(location);
    
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const [toDoList, setToDoList] = useState("");
  const [clickTodo, setclickTodo] = useState([]);
  let [values, setData] = useState([]);

  const handleChangeTodo = (e) => {
    setToDoList(e.target.value);
  };

  const GoogleId = localStorage.getItem("GoogleId");
  const countTodoList = () => {
    if (GoogleId) {
      axios
        .get(api+"/todo/count_Todo/" + GoogleId)
        .then((res) => {
          setCount(res.data.data[0].totalToDo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const [openMsg, setopenMsg] = useState(false);
  const submitToDoList = (e) => {
    if (GoogleId) {
      if (toDoList !== "") {
        axios
          .post(api+"/todo", {
            List: toDoList,
            GoogleId: GoogleId,
          })
          .then((res) => {
            console.log("Todo inserted in db");
          })
          .catch((err) => {
            console.log(err);
          });
        setToDoList("");
        getTodoList();
      }
    } else {
      if (toDoList !== "") {
        let newValue = { List: toDoList };
        const oldValue = JSON.parse(localStorage.getItem("todo-app"));
        if (oldValue !== null) {
          values = [...oldValue];
        }
        values.push(newValue);
        updateUrl(values);
        setToDoList("");
        setCount(values.length);
        setopenMsg(true);
      }
    }
  };
  const saveDataToLocalStorage = (value) => {
    localStorage.setItem("todo-app", JSON.stringify(value));
  };
  const updateUrl = (value) => {
    saveDataToLocalStorage(value);
    setData(value);
    setclickTodo(JSON.parse(localStorage.getItem("todo-app")));
  };

  const getTodoList = () => {
    if (GoogleId) {
      axios.get(api+"/todo/" + GoogleId).then((res) => {
        setclickTodo(res.data.data);

        console.log("Data display successfully");
      });
      countTodoList();
    } else {
      const data = JSON.parse(localStorage.getItem("todo-app"));

      if (data !== null) {
        setclickTodo(data);
        setCount(data.length);
      } else setclickTodo([]);
    }
  };
  React.useEffect(() => {
    getTodoList();
  }, []);

  const [checked, setChecked] = React.useState(true);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleCloseMsg = () => {
    setopenMsg(false);
  };

  const [showIcon, setshowIcon] = useState(true);
  const changeIcon = () => {
    setshowIcon(!showIcon);
  };
  const [updateTodoList, setupdateTodoList] = useState({});
  const updateTodo = (ToDoListId, ProfileId, List, id) => {
    // console.log(ToDoListId + " " + ProfileId + " " + List);
    setupdateTodoList({
      ToDoListId: ToDoListId,
      ProfileId: ProfileId,
      List: List,
      id,
    });
    changeIcon();
    setEditMode(List);
  };

  const deleteItem = (TodoListId, ProfileId, id) => {
    console.log(TodoListId + " " + ProfileId + " " + id);
    if (GoogleId) {
      axios
        .delete(api+"/todo/" + TodoListId, {
          data: {
            ProfileId: ProfileId,
          },
        })
        .then((res) => {
          console.log(res);
          console.log("data deleteed");
        })
        .catch((err) => {
          console.log(err);
          console.log("data failed to delete");
        });

      getTodoList();
    } else {
      let items = JSON.parse(localStorage.getItem("todo-app"));
      items = items.filter((arr, index) => {
        return id !== index;
      });

      localStorage.setItem("todo-app", JSON.stringify(items));
      setclickTodo(JSON.parse(localStorage.getItem("todo-app")));

      setCount(items.length);
    }
  };

  const updateTodoDb = (ToDoListId, ProfileId, List, id) => {
    console.log(ToDoListId, ProfileId, List, id);
    if (GoogleId) {
      if (editMode !== "") {
        axios
          .patch(api+"/todo/" + ToDoListId, {
            List: editMode,
            ProfileId: ProfileId,
          })
          .then((res) => {
            console.log("updated data");
          })
          .catch((err) => {
            console.log(err);
            console.log("unsuccessful");
          });
      }
    } else {
      if (editMode !== "") {
        let items = JSON.parse(localStorage.getItem("todo-app"));
        items = items.map((item, index) => {
          if (id === index) {
            console.log(items[index].List);
            items[index].List = editMode;
            console.log(items);

            localStorage.setItem("todo-app", JSON.stringify(items));
            setclickTodo(JSON.parse(localStorage.getItem("todo-app")));
          }
        });
      }
    }
    document.getElementById("updateTodoList").value = "";
    setToDoList("");
    getTodoList();
  };
  const clearAllItem = (id) => {
    console.log(GoogleId);

    if (GoogleId) {
      axios
        .delete(api+"/todo/alldelete/" + GoogleId)
        .then((res) => {
          console.log("delete all " + res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let items = JSON.parse(localStorage.getItem("todo-app"));
      items = items.filter((arr, index) => {
        return id === index;
      });
      console.log(items);
      localStorage.setItem("todo-app", JSON.stringify(items));
      setclickTodo(JSON.parse(localStorage.getItem("todo-app")));
    }
    getTodoList();
  };

  function handleListKeyDown(event) {
    if (event.key === "Shift" ) {
    
      event.preventDefault();
      setOpen(false);
    }
    else if(event.key === "Tab" ){
      event.preventDefault();
      setOpen(false);
    }
  }



  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleAdd = () => {
    setupdateTodoList("");
    changeIcon();
  };


const [reminder,setReminder]=useState(false)
const handleReminderClose=()=>{
  setReminder(false)
}

const handleNotify=()=>{
  if(GoogleId)
  {
   setReminder(true) 
  }
  else
  {
    // setopenMsg(true);
    setReminder(true) 
  
  }
}
  return (
    <>
      <Root>
        <div className={classes.root}>
          <div>
            <Tooltip title="Todo List">
              <Button
                disableRipple
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{ backgroundColor: "transparent" }}
              >
                <div className={classes.topThirdIcon}>
                  <img
                    src={todoicon}
                    alt="todo"
                    width="25px"
                    height="25px"
                    style={{ backgroundColor: "rgb(227, 230, 228 / 0.1)" }}
                  ></img>
                </div>
              </Button>
            </Tooltip>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              // role={undefined}
              transition
              disablePortal
            

              className="popper"
              onMouseDown={handleListKeyDown}
             
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <div
                      className={classes.Title}
                      style={
                        localStorage.getItem("DarkMode") === "true"
                          ? { backgroundColor: "#595959" }
                          : { color: "" }
                      }
                    >
                      <span style={{ color: "#FF6A00" }}>T</span>
                      <span style={{ color: "#D40078", marginRight: "0.5rem" }}>
                        O
                      </span>
                      <span style={{ color: "#3bc0c0" }}>D</span>
                      <span style={{ color: "#EF3080", marginRight: "0.5rem" }}>
                        O
                      </span>
                      <span style={{ color: "#FF0000" }}>L</span>
                      <span style={{ color: "#5AA92A" }}>I</span>
                      <span style={{ color: "#57C000" }}>S</span>
                      <span style={{ color: "#FFB000" }}>T</span>
                    </div>

                     <ClickAwayListener onClickAway={handleClose}>
                      {/* <MenuList
                        // autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        className={classes.menu}
                        style={
                          localStorage.getItem("DarkMode") === "true"
                            ? { backgroundColor: "#3d4042" }
                            : { color: "" }
                        }
                      > */}
                      <div>
                        <Box
                          sx={
                            localStorage.getItem("DarkMode") === "true"
                              ? {
                                  position: "relative",
                                  mt: "14px",
                                  "&::before": {
                                    backgroundColor: "#595959",
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    width: 14,
                                    height: 14,
                                    top: -74,

                                    transform: "rotate(45deg)",
                                    left: "calc(70% - 1rem)",
                                  },
                                }
                              : {
                                  position: "relative",
                                  mt: "14px",
                                  "&::before": {
                                    backgroundColor: "#EBEBEB",
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    width: 14,
                                    height: 14,
                                    top: -74,

                                    transform: "rotate(45deg)",
                                    left: "calc(70% - 1rem)",
                                  },
                                }
                          }
                        />
                        <div
                          className={classes.DayDateDiv}
                          style={
                            localStorage.getItem("DarkMode") === "true"
                              ? { color: "#E4E6EB" }
                              : { color: "" }
                          }
                        >
                          <span style={{ color: "#5AA92A" }}>
                            {moment().format("dddd")}
                          </span>
                          <span style={{ fontWeight: "500" }}>
                            {moment().format("MMM Do")}
                          </span>
                        </div>
                        <div className={classes.DataMianDiv}>
                          <Container>
                            <div className="eachItem">
                              {clickTodo.map((items, index) => {
                                return (
                                  <div className={classes.checkBoxx}>
                                    <div
                                      className={
                                        classes.checkBoxDataTimeMainDiv
                                      }
                                    >
                                      <IoListCircleSharp
                                        style={{
                                          fontSize: "1rem",
                                          marginTop: "0.3rem",
                                          marginRight: "0.5rem",
                                        }}
                                      />

                                      <div className={classes.checkBoxData}>
                                        <div style={{ marginBottom: "0.5rem" }}>
                                          {items.list !== "" ? items.List : ""}
                                        </div>

                                        <span>
                                          <div className="edit">
                                          <IoNotifications  className={classes.deleteTodo} onClick={handleNotify}/>
                                            {showIcon ? (
                                              <>
                                                <FiEdit
                                                  style={{
                                                    color: "green",
                                                    fontSize: "0.9rem",
                                                  }}
                                                  onClick={() =>
                                                    updateTodo(
                                                      items.ToDoListId,
                                                      items.ProfileId,
                                                      items.List,
                                                      index
                                                    )
                                                  }
                                                  className={classes.deleteTodo}
                                                />
                                              </>
                                            ) : (
                                              <>
                                                <AiFillCheckCircle
                                                  style={{
                                                    color: "green",
                                                    fontSize: "0.9rem",
                                                  }}
                                                  onClick={() => handleAdd()}
                                                  className={classes.deleteTodo}
                                                />
                                              </>
                                            )}

                                            {/* <FiEdit
                                              style={{
                                                color: "green",
                                                fontSize: "0.9rem",
                                              }}
                                              onClick={() =>
                                                updateTodo(
                                                  items.ToDoListId,
                                                  items.ProfileId,
                                                  items.List,
                                                  index
                                                )
                                              }
                                              className={classes.deleteTodo}
                                            /> */}

                                            <AiFillDelete
                                              onClick={() =>
                                                deleteItem(
                                                  items.ToDoListId,
                                                  items.ProfileId,
                                                  index
                                                )
                                              }
                                              key={index}
                                              id={index}
                                              className={classes.deleteTodo}
                                            />
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </Container>

                          <div className={classes.addNodeDiv}>
                            <div className={classes.addInputDiv}>
                              {updateTodoList.List ||
                              updateTodoList.ToDoListId ? (
                                <>
                                  <FiEdit
                                    style={{
                                      color: "green",
                                      fontSize: "0.9rem",
                                    }}
                                    onClick={() => {
                                      updateTodoDb(
                                        updateTodoList.ToDoListId,
                                        updateTodoList.ProfileId,
                                        updateTodoList.List,
                                        updateTodoList.id
                                      );
                                      handleAdd();
                                    }}
                                  />
                                </>
                              ) : (
                                <IoAddCircleSharp
                                  className={classes.AddIcon}
                                  onClick={submitToDoList}
                                />
                              )}

                              {updateTodoList.List ||
                              updateTodoList.ToDoListId ? (
                                <input
                                  id="updateTodoList"
                                  type="text"
                                  className={classes.editTaskFiled}
                                  // value={updateTodoList.List}
                                  value={editMode}
                                  onChange={handleEditMode}
                                  name="todo"
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      updateTodoDb(
                                        updateTodoList.ToDoListId,
                                        updateTodoList.ProfileId,
                                        updateTodoList.List,
                                        updateTodoList.id
                                      );
                                      handleAdd();
                                    }
                                  }}
                                />
                              ) : (
                                <input
                                  type="text"
                                  className={classes.addTaskFiled}
                                  placeholder="Add New Task.."
                                  onChange={handleChangeTodo}
                                  name="todo"
                                  value={toDoList}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      submitToDoList();
                                    }
                                  }}
                                />
                              )}
                            </div>
                          </div>

                          <div className={classes.countTaskClearAllMainDiv}>
                            <div
                              style={
                                localStorage.getItem("DarkMode") === "true"
                                  ? { fontSize: "0.9rem", color: "#E4E6EB" }
                                  : { fontSize: "0.9rem", color: "#3A0404" }
                              }
                            >
                              <span
                                style={{
                                  color: "#1D9BF0",
                                  fontSize: "1em",
                                  fontWeight: "500",
                                }}
                              >
                                Tasks {count}
                              </span>
                            </div>
                            <Button
                              onClick={(id) => {
                                clearAllItem(id);
                              }}
                              variant="text"
                              style={
                                localStorage.getItem("DarkMode") === "true"
                                  ? {
                                      fontSize: "0.9rem",
                                      color: "#E4E6EB",
                                      borderRadius: "90px",
                                      marginTop: "5px",
                                    }
                                  : {
                                      fontSize: "0.9rem",
                                      color: "#C33E3A",
                                      borderRadius: "90px",
                                      marginTop: "5px",
                                    }
                              }
                            >
                              <span className={classes.clearbutton}>
                                Clear
                                <IoTrashBinOutline
                                  className={classes.clearIcon}
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                       { reminder? <ReminderTodo handleReminderClose={handleReminderClose}/>:" "}
                    
                        <SignUpAlertPopMsg
                          open={openMsg}
                          handleCloseMsg={handleCloseMsg}
                          height="100%"
                          vertical="top"
                          horizontal="center"
                          message="Please sign in to use todos features !"
                          severity="info"
                        />

                       
                      {/* {/* </MenuList> */}
                      </div>
                    </ClickAwayListener> 
                   
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
        
      </Root>
    </>
  );
}