import { Scene } from "./components/Scene";
import { Player } from "./components/Player";
import { Map } from "./components/Map";
import useEventListeners from "./hooks/useEventListeners";

export default function Game() {
  useEventListeners();
  return (
    <Scene>
      <Player />
      <Map />
    </Scene>
  );
}
