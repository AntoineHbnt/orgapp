import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeTaskImage,
  deleteTaskImage,
} from "../../../../features/tasks/tasksLists/tasksListsSlice";
import { getBase64 } from "../../../../Utils";
import Button from "../../atoms/Button/Button";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import PenIcon from "../../atoms/icons/Pen";
import TrashIcon from "../../atoms/icons/Trash";
import { Container, FileInput, Label, RowButton } from "./ImageSettings.styles";

const ImageSettings = ({ listId, taskId, picture }) => {
  const fileInput = useRef();
  const dispatch = useDispatch();

  const handlePictureChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await getBase64(file);

    dispatch(changeTaskImage({ listId, taskId, base64 }));
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleDelete = () => {
    dispatch(deleteTaskImage({ listId, taskId }));
  };

  return (
    <Container>
      {picture !== "" ? (
        <>
          <Label>Modifier Image</Label>
          <RowButton>
            <Button
              icon={<PenIcon css={{ transform: "scale(1.5)" }} />}
              onClick={() => handleClick()}
            />
            <Button
              icon={<TrashIcon css={{ transform: "scale(1.5)" }} />}
              onClick={() => handleDelete()}
            />
          </RowButton>
        </>
      ) : (
        <>
          <Label>Ajouter Image</Label>
          <Button
            icon={<AddCrossIcon css={{ transform: "scale(1.5)" }} />}
            onClick={() => handleClick()}
          />
        </>
      )}
      <FileInput
        ref={fileInput}
        type="file"
        onChange={(e) => handlePictureChange(e)}
      />
    </Container>
  );
};

export default ImageSettings;
