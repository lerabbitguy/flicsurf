import React, { useState } from "react";
import { Button, Popover } from "react-bootstrap";

const AddToListButton = ({ onAddToList }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleAddToList = (listType) => {
    onAddToList(listType);
    setShowPopover(false);
  };

  const handleTogglePopover = () => {
    setShowPopover((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={handleTogglePopover}>Add to List</Button>
      <Popover show={showPopover} placement="top" onClose={() => setShowPopover(false)}>
        <Popover.Body>
          <p onClick={() => handleAddToList("alreadyWatched")}>Already Watched List</p>
          <p onClick={() => handleAddToList("wantToWatch")}>Want to Watch List</p>
        </Popover.Body>
      </Popover>
    </>
  );
};

export default AddToListButton;
