import Experience from "./Supermain";
import * as THREE from 'three';
export default class Renderer {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.scene.background = new THREE.Color(0xeeeeee);
        this.setRenderer();
        


    }
    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        })
        this.renderer.physicalCorrectLights = true;
        this.renderer.outputEncodings = THREE.sRGB8Alpha8Encoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure=.4;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);

    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
       
    

    }
    update() {
        this.renderer.render(this.scene, this.camera.orthographicCamera);
    }
}