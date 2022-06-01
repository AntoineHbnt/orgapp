import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTagColor, changeTagLabel } from "../../../../features/tasks/tasksLists/tasksListsSlice";
import Button from "../Button/Button";
import ColorPicker from "../ColorPicker/ColorPicker";
import BucketIcon from "../icons/Bucket";
import InputLabel from "../InputLabel/InputLabel";
import { Row, settingsButtonStyle, TagItem } from "./TagSettings.styles";

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

      dispatch(
          changeTagColor({ listId, taskId, tagId: tag.id, color })
      )
  }

  return (
    <TagItem key={tag.id} css={{ backgroundColor: color }}>
      <Row css={{ width: "100%" }}>
        <InputLabel
          value={tag.label.toUpperCase()}
          onChange={(e) => handleTagLabelChange(e)}
          css={{ fontWeight: "700" }}
        />
        <Button
          icon={<BucketIcon css={{ transform: "scale(1.5)" }} />}
          css={settingsButtonStyle}
          onClick={(e) =>
            setIsPickerActive((isPickerActive) => !isPickerActive)
          }
        />
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
