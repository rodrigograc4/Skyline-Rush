
// HELPER FUNCTIONS

const helper = {

    initEmptyScene: function (sceneElements) {

        // ************************** //
        // Create the 3D scene
        // ************************** //
        sceneElements.sceneGraph = new THREE.Scene();
        sceneElements.sceneGraph.background = new THREE.Color(0x0C3A56)
        //sceneElements.sceneGraph.fog = new THREE.Fog(0xFFAA66, 1, 11000)

        // ************************** //
        // Add camera
        // ************************** //
        const width = window.innerWidth;
        const height = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(45, width / height, 10, 10000);
        sceneElements.camera = camera;
        camera.name = "camera";
        camera.position.set(-2000, 1100, 0);
        camera.lookAt(0, 0, 0);

        // ************************** //
        // Illumination
        // ************************** //

        // ************************** //
        // Add ambient light
        // ************************** //
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        sceneElements.sceneGraph.add(ambientLight);

        // ***************************** //
        // Add spotlight (with shadows)
        // ***************************** //
        const sunLight = new THREE.SpotLight(0xffffff);
        sunLight.position.set(0, 5000, 0);
        sunLight.intensity = 1.5;
        sunLight.decay = 0;
        sunLight.penumbra = 1;
        sunLight.distance = 10000;

        sceneElements.sceneGraph.add(sunLight);

        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 3072;
        sunLight.shadow.mapSize.height = 2048;// For sunLight
        
        
        sunLight.name = "sunLight";


        const moonLight = new THREE.SpotLight(0xffffff);
        moonLight.position.set(0, -5000, 0);
        moonLight.intensity = 0;
        moonLight.decay = 0;
        moonLight.penumbra = 1;
        moonLight.distance = 10000;
        sceneElements.sceneGraph.add(moonLight);

        moonLight.castShadow = true;
        moonLight.shadow.mapSize.width = 3072;
        moonLight.shadow.mapSize.height = 2048;// For moonLight

        moonLight.name = "moonLight";

        // *********************************** //
        // Create renderer (with shadow map)
        // *********************************** //
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        sceneElements.renderer = renderer;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor('rgb(255, 255, 150)', 1.0);
        renderer.setSize(width, height);

        // Setup shadowMap property
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // **************************************** //
        // Add the rendered image in the HTML DOM
        // **************************************** //
        const htmlElement = document.querySelector("#Skyline_Rush");
        htmlElement.appendChild(renderer.domElement);

        // // ************************** //
        // // NEW --- Control for the camera
        // // ************************** //
        // sceneElements.control = new OrbitControls(camera, renderer.domElement);
        // sceneElements.control.screenSpacePanning = true;

        // ************************** //
        // NEW --- Interaction setup
        // ************************** //
    },

    render: function (sceneElements) {
        sceneElements.renderer.render(sceneElements.sceneGraph, sceneElements.camera);
    },
};