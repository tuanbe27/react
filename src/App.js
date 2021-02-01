import List from "./components/ListComponent";
import Search from "./components/SearchComponent";
import Tilte from "./components/TitleComponent";
import Items from "./TestData/items";
import Item from "./components/ItemComponent";
import Swal from "sweetalert2";
import { Toast } from "./components/Alert/Toast";
import { useState, useEffect } from "react";
import FormDialog from "./components/Alert/HandleAddAndEdit";
import uuidv4 from "uuid/v4";
import OpenIconSpeedDial from "./components/FABAddItem";

const App = () => {
  const [data, setData] = useState(Items);
  const [isNew, setIsNew] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [searchData, setSearchData] = useState(data);
  const [searchKey, setSearchKey] = useState("");

  let priority = {
    Low: "badge badge-info",
    Medium: "badge badge-warning",
    Hight: "badge badge-danger",
  };
  const listItem = searchData.map((e, index) => (
    <Item
      stt={index + 1}
      key={e.id}
      id={e.id}
      isEdit={e.isEdit}
      isOpen={isOpen}
      name={e.name}
      level={Object.keys(priority)[e.level]}
      class={Object.values(priority)[e.level]}
      showDeleteAlert={() => handleDeletePopup(e.id)}
      showEditDialog={() => handleEditOpen(e.id)}
      closeEditDialog={(updateData) => handleEditeClose(updateData)}
    />
  ));

  const handleDeleteButton = (props) => {
    Swal.fire({
      title: `Bạn có muốn xoá "${props.name}"?`,
      text: "You won't be able to revert this!",
      footer: "",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      didOpen: () => {},
    }).then((result) => {
      if (result.value) {
        Toast.fire({
          icon: "success",
          title: "Deleted successfully",
        });
        handleDeleteItem(props.id);
        setSearchKey("");
      }
    });
  };

  const handleDeletePopup = (id) => {
    let item = data.find((e) => e.id === id);
    handleDeleteButton({ ...item });
  };

  const handleDeleteItem = (id) => {
    let newList = data.filter((e) => e.id !== id);
    setData(newList);
  };

  const handleEditOpen = (id) => {
    let findIdx = data.findIndex((e) => e.id === id);
    data[findIdx].isEdit = true;
    setData(data);
    setIsOpen(true);
  };

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const handleEditeClose = (updateData) => {
    let findIdx = data.findIndex((e) => e.id === updateData.id);
    data[findIdx].isEdit = updateData.false;
    if (updateData.name && updateData.priority) {
      data[findIdx].name = updateData.name;
      data[findIdx].level = Object.keys(priority).findIndex(
        (e) => e === updateData.priority
      );
      setData(data);
      setIsOpen(false);
      Toast.fire({
        icon: "success",
        title: "Updated successfully",
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleOpenAddDialog = () => {
    setIsOpenAdd(true);
    setIsNew(true);
  };

  const handleCloseAddDialog = (newData) => {
    if (newData && newData.name.length > 0) {
      let levelNumber = Object.keys(priority).findIndex(
        (e) => e === newData.priority
      );
      let newTask = {
        id: uuidv4(),
        name: newData.name,
        level: levelNumber,
        isEdit: false,
      };
      setData([...data, newTask]);
      setIsNew(false);
      setIsOpenAdd(false);
      Toast.fire({
        icon: "success",
        title: "Created successfully",
      });
    } else if (newData && newData.name.length === 0) {
      // setIsOpenAdd(false);
      Toast.fire({
        icon: "error",
        title: "Name is not empty!",
        target: document.getElementById("form-dialog-title"),
      });
    } else {
      setIsOpenAdd(false);
    }
  };

  const handleSearchInput = (e) => {
    if (e.target.value.length) {
      const regex = new RegExp(e.target.value, "i");
      setSearchData(data.filter((e) => regex.test(e.name)));
      setSearchKey(e.target.value);
    } else {
      setSearchData(data);
      setSearchKey("");
    }
  };
  const handleClearSearch = () => {
    setSearchData(data);
    setSearchKey("");
  };
  return (
    <div className="container">
      <Tilte />
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Search
            searchKey={searchKey}
            handleSearchInput={(e) => handleSearchInput(e)}
            clearButton={() => handleClearSearch()}
          />
        </div>

        {isNew && (
          <FormDialog
            isNew={isNew}
            title="Add new task"
            description="Please enter your information for a new task."
            isOpen={isOpenAdd}
            close={(newData) => handleCloseAddDialog(newData)}
          />
        )}
      </div>
      <List items={listItem} />
      <OpenIconSpeedDial clicked={() => handleOpenAddDialog()} />
    </div>
  );
};

export default App;
