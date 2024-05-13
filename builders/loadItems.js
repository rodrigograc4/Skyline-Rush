// ************************** //
// Load Nissan Skyline
// ************************** //

function createNissanSkyline(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/skyline/low_poly_nissan_skyline/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(85,85,85)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });
           
            group.add(gltf.scene);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Nissan Skyline ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    
    // Adicionar spotlight
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(posx +200, 50, posz +60); 
    spotLight.angle = Math.PI/12;
    spotLight.penumbra = 0.1;
    spotLight.decay = 0.02;
    spotLight.distance = 6000;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.far = 200;
    spotLight.target.position.set(posx + 6200, 0, posz + 60);
    spotLight.name = "headlight_skyline_right";

    const spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(posx +200, 50, posz -60); 
    spotLight2.angle = Math.PI/12;
    spotLight2.penumbra = 0.1;
    spotLight2.decay = 0.02;
    spotLight2.distance = 6000;
    spotLight2.castShadow = true;
    spotLight2.shadow.mapSize.width = 1024;
    spotLight2.shadow.mapSize.height = 1024;
    spotLight2.shadow.camera.near = 10;
    spotLight2.shadow.camera.far = 200;
    spotLight2.target.position.set(posx + 6200, 0, posz - 60);
    spotLight2.name = "headlight_skyline_left";

    group.add(spotLight);
    group.add(spotLight.target);
    group.add(spotLight2);
    group.add(spotLight2.target);

    return group;
}

// ************************** //
// Load Highway Fence
// ************************** //

function createHighwayFence(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/highway_fence/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(40,40,40)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 38, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Highway Fence ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Beach Ball
// ************************** //

function createBeachBall(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/beach_ball_-_low_poly/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(150,150,150)
            gltf.scene.position.set(posx,30, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Beach Ball ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Palm Tree
// ************************** //

function createPalmTree(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/low_poly_palm/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(100,100,100)
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Palm Tree ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load House
// ************************** //

function createHouse(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/low_poly_house/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(300,300,300)
            gltf.scene.rotation.y = Math.PI
            gltf.scene.position.set(posx, -10, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'House ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}



// ************************** //
// Load Beach Umbrella
// ************************** //

function createBeachUmbrella(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/parasol_lowpoly_-_beach_umbrella/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(50,50,50)
            gltf.scene.position.set(posx, -10, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Beach Umbrella ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Ice Cream Car
// ************************** //

function createIceCreamCar(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/stylized_toon_ice_cream_hand_car/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(70,70,70)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 40, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Ice Cream Car ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Buildings
// ************************** //

function createBuildings(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/set_of_4_low-poly_buildings/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(200,200,200)
            gltf.scene.rotation.y = Math.PI
            gltf.scene.position.set(posx, -100, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Buildings ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Stylized House
// ************************** //

function createStylizedHouse(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/stylizes_low-poly_house/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(80,80,80)
            gltf.scene.rotation.y = Math.PI /2
            gltf.scene.position.set(posx, 0 , posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Stylized House ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Suburban House
// ************************** //

function createSuburbanHouse(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/suburb_house_1/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(1100,1100,1100)
            gltf.scene.rotation.y = -Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Suburban House ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Car
// ************************** //

function createCar(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/low_poly_car/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(0.45,0.45,0.45)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });
            group.add( gltf.scene );

            // // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx +200, 50, posz +60); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx + 1000, 0, posz + 60);
            // spotLight.name = "headlight_car_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx +200, 50, posz -60); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx + 1000, 0, posz - 60);
            // spotLight2.name = "headlight_car_left";

            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Car ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );

    return group;
}


function createOppositeCar(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/low_poly_car/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(0.45,0.45,0.45)
            gltf.scene.rotation.y = -Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            // // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx -200, 50, posz +60); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx - 1000, 0, posz + 60);
            // spotLight.name = "headlight_oppositecar_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx -200, 50, posz -60); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx - 1000, 0, posz - 60);
            // spotLight2.name = "headlight_oppositecar_left";

            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Car ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load CarMercedes
// ************************** //

function createCarMercedes(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/mercedes-benz_500sel_w126_lowpoly_for_3dprinting/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(0.1,0.1,0.1)
            //gltf.scene.rotation.y = Math.PI
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            
            // // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx, 50, posz -30); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx + 800, 0, posz -30);
            // spotLight.name = "headlight_carMercedes_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx, 50, posz -150); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx + 800, 0, posz - 150);
            // spotLight2.name = "headlight_carMercedes_left";

            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'CarMercedes ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

function createOppositeCarMercedes(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/mercedes-benz_500sel_w126_lowpoly_for_3dprinting/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(0.1,0.1,0.1)
            gltf.scene.rotation.y = Math.PI
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            
            
            // // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx, 50, posz +30); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx -800, 0, posz +30);
            // spotLight.name = "headlight_oppositecarMercedes_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx, 50, posz +150); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx - 800, 0, posz + 150);
            // spotLight2.name = "headlight_oppositecarMercedes_left";

            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'CarMercedes ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Sports Car
// ************************** //

function createSportsCar(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/ford_mustang_svt_cobra_r_2000_low_poly/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(130,130,130)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            
            // // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx +300, 50, posz +60); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx + 1100, 0, posz + 60);
            // spotLight.name = "headlight_sportscar_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx +300, 50, posz -60); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx + 1100, 0, posz - 60);
            // spotLight2.name = "headlight_sportscar_left";

            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Sports Car ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


function createOppositeSportsCar(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/ford_mustang_svt_cobra_r_2000_low_poly/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(130,130,130)
            gltf.scene.rotation.y = -Math.PI/2
            gltf.scene.position.set(posx, 0, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            
            // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx -300, 50, posz +60); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx - 1100, 0, posz + 60);
            // spotLight.name = "headlight_oppositesportscar_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx -300, 50, posz -60); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx - 1100, 0, posz - 60);
            // spotLight2.name = "headlight_oppositesportscar_left";

            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Truck ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


// ************************** //
// Load Truck
// ************************** //

function createOppositeTruck(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/low_poly_truck/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(60,60,60)
            gltf.scene.rotation.y = -Math.PI/2
            gltf.scene.position.set(posx, -20, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            
            // // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx -280, 50, posz +440); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx - 1080, 0, posz +440);
            // spotLight.name = "headlight_oppositetruck_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx -280, 50, posz +560); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx - 1080, 0, posz + 560);
            // spotLight2.name = "headlight_oppositetruck_left";
            
            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Truck ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

function createTruck(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/cars/low_poly_truck/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(60,60,60)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, -20, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            
            // // Adicionar spotlight
            // const spotLight = new THREE.SpotLight(0xffffff);
            // spotLight.position.set(posx +280, 50, posz -440); 
            // spotLight.angle = Math.PI/11;
            // spotLight.penumbra = 0.1;
            // spotLight.decay = 0.05;
            // spotLight.distance = 2000;
            // spotLight.castShadow = true;
            // spotLight.shadow.mapSize.width = 2048;
            // spotLight.shadow.mapSize.height = 1024;
            // spotLight.shadow.camera.near = 10;
            // spotLight.shadow.camera.far = 200;
            // spotLight.target.position.set(posx + 1080, 0, posz -440);
            // spotLight.name = "headlight_truck_right";

            // const spotLight2 = new THREE.SpotLight(0xffffff);
            // spotLight2.position.set(posx +280, 50, posz -560); 
            // spotLight2.angle = Math.PI/11;
            // spotLight2.penumbra = 0.1;
            // spotLight2.decay = 0.05;
            // spotLight2.distance = 2000;
            // spotLight2.castShadow = true;
            // spotLight2.shadow.mapSize.width = 2048;
            // spotLight2.shadow.mapSize.height = 1024;
            // spotLight2.shadow.camera.near = 10;
            // spotLight2.shadow.camera.far = 200;
            // spotLight2.target.position.set(posx + 1080, 0, posz - 560);
            // spotLight2.name = "headlight_truck_left";

            // group.add(spotLight);
            // group.add(spotLight.target);
            // group.add(spotLight2);
            // group.add(spotLight2.target);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Sports Car ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}

// ************************** //
// Load Lamp Post
// ************************** //

function createLampPost(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/low_poly_psx_street_lamp/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(25,25,25)
            gltf.scene.rotation.y = Math.PI/2
            gltf.scene.position.set(posx, 10, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            // Adicionar spotlight
            const spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set(posx, 100, posz - 100); 
            spotLight.angle = Math.PI;
            spotLight.penumbra = 0.1;
            spotLight.intensity = 2;
            spotLight.decay = 0.05;
            spotLight.distance = 2000;
            spotLight.castShadow = true;
            spotLight.shadow.mapSize.width = 1024;
            spotLight.shadow.mapSize.height = 1024;
            spotLight.shadow.camera.near = 10;
            spotLight.shadow.camera.far = 200;
            spotLight.target.position.set(posx, 0, posz - 100);
            spotLight.name = "lamp";

            group.add(spotLight);


        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Lamp Post ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}


function createReverseLampPost(posx, posz) {
    const group = new THREE.Group();

    // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/low_poly_psx_street_lamp/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.scale.set(25,25,25)
            gltf.scene.rotation.y = -Math.PI/2
            gltf.scene.position.set(posx, 10, posz)

            gltf.scene.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                }
            });

            group.add( gltf.scene );

            const spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set(posx, 100, posz + 100); 
            spotLight.angle = Math.PI;
            spotLight.penumbra = 0.1;
            spotLight.intensity = 2;
            spotLight.decay = 0.05;
            spotLight.distance = 2000;
            spotLight.castShadow = true;
            spotLight.shadow.mapSize.width = 1024;
            spotLight.shadow.mapSize.height = 1024;
            spotLight.shadow.camera.near = 10;
            spotLight.shadow.camera.far = 200;
            spotLight.target.position.set(posx, 0, posz + 100);
            spotLight.name = "lampreverse";

            group.add(spotLight);
        },
        // called while loading is progressing
        function ( xhr ) {
            console.log( 'Lamp Post ' +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
            function ( error ) {
        console.log( ' An error happened' +  error );
        }
    );
    return group;
}