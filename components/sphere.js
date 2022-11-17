import { useEffect } from "react";
import * as THREE from "three";

function Sphere() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.x = 40;
    camera.position.y = -40;
    camera.position.z = 200;

    const canvas = document.getElementById("myThreeJsCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(100, 100);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const geometry = new THREE.SphereGeometry(50, 9, 9); // (radius, widthSegments, heightSegments)
    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: "#6B9080",
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const animate = () => {
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  });

  return (
    <div>
      <canvas className="absolute z-20 top-0 left-0" id="myThreeJsCanvas" />
    </div>
  );
}

export default Sphere;
