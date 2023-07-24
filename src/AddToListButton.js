import React, { useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";

const AddToListButton = ({ onAddToList }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);

  const handleAddToList = (listType) => {
    onAddToList(listType);
    setShowPopover(false);
  };

  const handleTogglePopover = (event) => {
    setShowPopover(!showPopover);
    setTarget(event.target);
  };

  const popover = (
    <Popover id="add-to-list-popover">
      <Popover.Content>
        <p
          className="clickable-text"
          onClick={() => handleAddToList("alreadyWatched")}
        >
          Already Watched List
        </p>
        <p
          className="clickable-text"
          onClick={() => handleAddToList("wantToWatch")}
        >
          Want to Watch List
        </p>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <Button onClick={handleTogglePopover}>Add to List</Button>
      <Overlay show={showPopover} target={target} placement="top" onHide={() => setShowPopover(false)}>
        {popover}
      </Overlay>
    </>
  );
};

export default AddToListButton;
