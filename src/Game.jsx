import { Scene } from "./components/Scene";
import { Player } from "./components/Player";
import { Map } from "./components/Map";
import useEventListeners from "./hooks/useEventListeners";
import { Controls } from "./components/Controls";
import "./Game.css";
import { Score } from "./components/Score";
import { Result } from "./components/Result";

export default function Game() {
  // useEventListeners();
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Score />
      <Controls />
      <Result />
    </div>
  );
}
