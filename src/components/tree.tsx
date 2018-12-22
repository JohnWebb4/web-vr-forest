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
      <a-box src="#tree1-leaves" color={leafColor} position="0 0.5 0" scale="0.5 0.5 0.5"></a-box>
      <a-box src="#tree1-bark" color={barkColor} position="0 0 0" scale="0.25 0.5 0.25"></a-box>
    </a-entity>
  );
}

export { IProps, Tree };
