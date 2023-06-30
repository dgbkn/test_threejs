import { Html, useProgress } from "@react-three/drei";

export function Loader() {
    const { progress } = useProgress();
    return <Html center> <h4 style={{fontSize: "50px"}}><b>{progress} % loaded</b></h4></Html>
  } 