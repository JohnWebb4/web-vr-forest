import React, { Fragment} from "react";

interface IProps {
  color: string;
  position: string;
  rotation: string;
}

function Tree({color, position, rotation}: IProps) {
  return (
    <a-entity position={position} rotation={rotation}>
      <a-image src="#tree1" scale="1 1 1" position="0 0.25 0" color={color}>
      </a-image>
    </a-entity>
  );
}

export { Tree };
