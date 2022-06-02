import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeTagColor,
  changeTagLabel,
  deleteTag,
} from "../../../../features/tasks/tasksLists/tasksListsSlice";
import Button from "../Button/Button";
import ColorPicker from "../ColorPicker/ColorPicker";
import BucketIcon from "../icons/Bucket";
import TrashIcon from "../icons/Trash";
import InputLabel from "../InputLabel/InputLabel";
import {
  ButtonRow,
  Row,
  settingsButtonStyle,
  TagItem,
} from "./TagSettings.styles";

const TagSettings = ({ listId, taskId, tag }) => {
  const dispatch = useDispatch();
  const [label, setLabel] = useState(tag.label);
  const [color, setColor] = useState(tag.color);
  const [isPickerActive, setIsPickerActive] = useState(false);

  const handleTagLabelChange = (e) => {
    setLabel(e.target.value);

    dispatch(
      changeTagLabel({ listId, taskId, tagId: tag.id, label: e.target.value })
    );
  };

  const handleTagColorChange = (color) => {
    setColor(color);
    dispatch(changeTagColor({ listId, taskId, tagId: tag.id, color }));
    handlePicker();
  };

  const handleTagDelete = (e) => {
    dispatch(deleteTag({ listId, taskId, tagId: tag.id }));
  };

  const handlePicker = () => {
    setIsPickerActive((isPickerActive) => !isPickerActive);
  };

  return (
    <TagItem key={tag.id} css={{ backgroundColor: color }}>
      <Row css={{ width: "100%" }}>
        <InputLabel
          value={label.toUpperCase()}
          onChange={(e) => handleTagLabelChange(e)}
          css={{ fontWeight: "700" }}
        />
        <ButtonRow>
          <Button
            icon={<BucketIcon css={{ transform: "scale(1.5)" }} />}
            css={settingsButtonStyle}
            onClick={(e) => handlePicker()}
          />
          <Button
            icon={<TrashIcon css={{ transform: "scale(1.5)" }} />}
            css={settingsButtonStyle}
            onClick={(e) => handleTagDelete(e)}
          />
        </ButtonRow>
      </Row>
      {isPickerActive && (
        <ColorPicker
          key={`${tag.id}-cp`}
          tagId={tag.id}
          setColor={(color) => handleTagColorChange(color)}
        />
      )}
    </TagItem>
  );
};

export default TagSettings;
