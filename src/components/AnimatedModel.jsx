import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const AnimatedModel = (props) => {
  const { model } = props;

  // load model
  const { scene } = useGLTF(model);
  // get animasi

  // jalankan animasi saat model selesai load

  return <primitive object={scene.clone()} position={[0, -2.5, -5]} />;
};

export default AnimatedModel;
