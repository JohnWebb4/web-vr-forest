import React, { Fragment} from "react";

interface IProps {
  barkColor?: string;
  leafColor?: string;
  position: string;
  rotation?: string;
  scale?: string;
}

function Tree({barkColor, leafColor, position, rotation, scale}: IProps) {
  return (
    <a-entity position={position} rotation={rotation} scale={scale}>
      <a-image src="#tree1-leaves" color={leafColor} position="0 0.5 0" scale="0.5 0.5 1"></a-image>
      <a-image src="#tree1-bark" color={barkColor} scale="0.25 0.5 1" position="0 0 0"></a-image>
    </a-entity>
  );
}

export { Tree };
