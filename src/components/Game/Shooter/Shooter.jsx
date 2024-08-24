import React, { useEffect, useRef } from "react";
import "./Shooter.css";
import { Bomb } from "./Bomb";
import { Bullet } from "./Bullet";
import { parentContainer, stage } from "./utils";
export const Shooter = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let bomb = new Bomb();
    parentContainer.addChild(bomb);

    stage.update();

    let bullet = new Bullet();

    parentContainer.addChild(bullet);

    bomb.addEventListener("onmouseenter", (e) => {
      e.preventDefault();
      console.log(e, "evnet");
    });

    stage.update();
    return () => {
      stage.removeAllChildren();
      stage.clear();
    };
  }, []);
  return (
    <div className="shooter-container">
      <canvas
        ref={canvasRef}
        width={window.screen.width}
        height={window.screen.height}
        id="shooter-game"
      ></canvas>
    </div>
  );
};
