import { useState, createContext } from "react";
import update from "immutability-helper";
import "./ContainerAeD.css";
import WolferLogo from "../assets/wolferLogo.png";

import { SvgCanvas } from "./SvgCanvas";
import { SvgCatalogue } from "./SvgCatalogue";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Switch from "react-switch";

export const CanvasContext = createContext({
  turnOn: null,
  toggleMenu: null,
  deleteItem: null,
  editMode: null,
  itemList: null,
});

export const ContainerAed = () => {
  //controls if right side menu is visible
  const [menuState, setMenuState] = useState(true);

  //controls right side menu drop down state
  const [optionsList, setOptionsList] = useState(["None"]);

  //set if edit mode is on
  const [editMode, setEditMode] = useState(false);

  //List of Svgs displayed in canvas
  const [itemList, setItemList] = useState({
    // 0: { title: "PressureBlower", state: false, selected: false, exists: true },
    0: {
      title: "RemoteControl",
      controllingKey: "None",
      selected: false,
      exists: true,
    },
  });

  //coordinates of items in canvas
  const [items, setItems] = useState({
    0: { top: 0, left: 90 },
    //1: { top: 0, left: 90 },
  });

  //Function that sets a target to a controller
  const changeControlTarget = (id, controllingKey) => {
    var _x = update(itemList, {
      [id]: {
        $merge: { controllingKey },
      },
    });
    setItemList(_x);
  };

  //Function that runs on the controller to change target state
  const turnOn = (state, id) => {
    if (!editMode) {
      if (id === "None") {
        alert("Nenhum Alvo Selecionado");
      } else {
        var _x = update(itemList, {
          [id]: {
            $merge: { state },
          },
        });
        setItemList(_x);
      }
    } else {
      return undefined;
    }
  };

  //returns new id to add item to canvas
  const newEntry = (object) => {
    let minKey;
    let minValue = Infinity;

    let maxKey;
    let maxValue = -Infinity;

    for (const key in object) {
      if (key < minValue) {
        minKey = key;
        minValue = key;
      }

      if (key > maxValue) {
        maxKey = key;
        maxValue = key;
      }
    }

    //const minEntry = { [minKey]: object[minKey] };
    //const maxEntry = { [maxKey]: object[maxKey] };
    if (maxKey) {
      return parseInt(maxKey) + 1;
    } else {
      return 1;
    }
  };

  //Deletes item from canvas
  const deleteItem = (id) => {
    var _x = update(itemList, {
      [id]: {
        $merge: { exists: false },
      },
    });
    setItemList(_x);
    const _y = items;
    delete _y[id];
    setItems(_y);

    var _currArr = optionsList;
    var _newArr = _currArr.filter((item) => item !== id.toString());
    setOptionsList(_newArr);
  };

  //Function to move box and update in the position state
  const moveBox = (id, left, top) => {
    setItems(
      update(items, {
        [id]: {
          $merge: { left, top },
        },
      })
    );
  };

  //Adds a new item to the canvas
  const addItem = (top, left, icon) => {
    const _entry = newEntry(itemList);
    const _x = itemList;
    _x[_entry] = {
      title: icon,
      state: false,
      selected: false,
      exists: true,
    };
    setItemList(_x);
    const _z = items;
    _z[_entry] = { top: top, left: left };
    setItems(_z);
    var _newarr = optionsList;
    _newarr.push(_entry.toString());
    setOptionsList(_newarr);
    console.log(optionsList);
  };

  //Connects the dropdown item selector to the control-target function
  const _onSelect = (e) => {
    changeControlTarget(0, e);
  };

  //sets selected item with id as true or false
  const selecionar = (id, selected) => {
    var _x = update(itemList, {
      [id]: {
        $merge: { selected },
      },
    });
    setItemList(_x);
  };

  //toggles between main menu and item menu
  const toggleMenu = (id) => {
    if (!itemList[id].selected && menuState) {
      selecionar(id, true);
      setMenuState(false);
    } else if (itemList[id].selected && !menuState) {
      selecionar(id, false);
      setMenuState(true);
    } else {
      console.log("failure");
    }
  };

  //constants for dropdown menu
  //const optionItems = options()
  const defaultOption = optionsList[0];

  return (
    //provides function to turn on items || currently PressureBlower
    <CanvasContext.Provider
      value={{ turnOn, toggleMenu, deleteItem, editMode, itemList }}
    >
      <div className="overlay">
        <div className="topbar">
          <img src={WolferLogo} alt="logo" className="logo"></img>
        </div>
        <div className="toolbar">
          <div>Tools</div>
          <button onClick={() => console.log(itemList)}></button>
          <button onClick={() => console.log(console.log())}></button>
          <button onClick={() => console.log("test")}></button>
          <div style={{ marginLeft: 100 }}>
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              checked={editMode}
              onChange={() => setEditMode((old) => !old)}
            />
          </div>
        </div>
        <div className="row">
          {editMode ? (
            <div className="catalogue">
              <text className="subhead">Catalogo</text>
              {/* List of svgs available to put in canvas */}
              <SvgCatalogue></SvgCatalogue>
            </div>
          ) : null}

          <div className="canvasColumn">
            <text style={{ fontSize: 23, marginBottom: 5 }}>
              Factory Building Canvas {editMode === true ? "editor" : "viewer"}
            </text>
            <div>
              {/* Main Canvas */}
              <SvgCanvas
                edit={editMode}
                items={items}
                addSgv={(top, left, icon) => addItem(top, left, icon)}
                setItemsFun={(id, left, top) => moveBox(id, left, top)}
                itemList={itemList}
              />
            </div>
          </div>
          {editMode ? (
            <div className="sidemenu">
              {menuState ? (
                <img src={WolferLogo} alt="logo"></img>
              ) : (
                Object.keys(itemList).map((key) => {
                  if (itemList[key].selected) {
                    return (
                      <>
                        <text className="subhead">menu</text>
                        <text style={{ marginTop: 20, fontWeight: "bold" }}>
                          {itemList[key].title}
                        </text>
                        {itemList[key].controllingKey ? (
                          <text
                            style={{ marginTop: "20px", marginBottom: "10px" }}
                          >
                            Control Selector
                          </text>
                        ) : null}
                        {itemList[key].controllingKey ? (
                          <Dropdown
                            options={optionsList}
                            onChange={(e) => _onSelect(e.value)}
                            value={defaultOption}
                            placeholder="Select an option"
                          />
                        ) : null}
                      </>
                    );
                  }
                })
              )}
            </div>
          ) : null}
        </div>
      </div>
    </CanvasContext.Provider>
  );
};
