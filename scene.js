// To store the scene graph, and elements usefull to rendering the scene
const sceneElements = {
    sceneGraph: null,
    camera: null,
    control: null,
    renderer: null,
};

// FUNCTIONS FOR BUILDING THE SCENE

const scene = {

    // Create and insert in the scene graph the models of the 3D scene

    load3DObjects: function (sceneGraph) {

        
        // ************************** //
        // Create Nissan Skyline
        // ************************** //

        const nissanSkyline = createNissanSkyline(-400, 0);
        sceneGraph.add(nissanSkyline);
        nissanSkyline.name = "nissanSkyline";


        // ************************** //
        // Create Plane with Everything
        // ************************** //


        const plane = createPlane(10000, 6000, -2000);
        sceneGraph.add(plane);
        plane.speed = 10;
        plane.name = "plane";

        const plane2 = createPlane(10000, 6000, 8000);
        sceneGraph.add(plane2);
        plane2.speed = 10;
        plane2.name = "plane2";

        const plane3 = createPlane(10000, 6000, 18000);
        sceneGraph.add(plane3);
        plane3.speed = 10;
        plane3.name = "plane3";

    }
};

let spawnInterval = 2000; // Início com 1 segundo
let minSpawnInterval = 100; // Limite de 0.01 segundos
let line = 250; // Distância entre as linhas

function spawnCars(sceneGraph) {
    setInterval(() => {
        // Seleciona aleatoriamente um tipo de carro
        const randomCarIndex = Math.floor(Math.random() * 4); // Gera um número aleatório entre 0 e 3
        let selectedCar;

        switch (randomCarIndex) {
            case 0:
                selectedCar = createCar(9000, 130);
                selectedCar.name = "car";
                break;
            case 1:
                selectedCar = createOppositeCar(9000, -370);
                selectedCar.name = "oppositecar";
                break;
            case 2: 
                selectedCar = createCarMercedes(9000, 220);
                selectedCar.name = "carMercedes";
                break;
            case 3:
                selectedCar = createOppositeCarMercedes(9000, -470);
                selectedCar.name = "oppositecarMercedes";
                break;
            default:
                selectedCar = createCar(4000, 130); // Caso algo dê errado, escolha um carro padrão
        }
        // Adiciona o carro selecionado à cena
        sceneGraph.add(selectedCar);
        if (Math.random() < 0.5) {
            selectedCar.position.z += 0;
        } else {
            selectedCar.position.z += line;
        }

    }, spawnInterval);
}


let velocityopposite = 40;
let velocity = 10;

function updateCarsPosition(sceneGraph) {
    // Remoção de carros que atingiram a posição -2000
    const cars = sceneGraph.children.filter(child => child.name.includes('car') || child.name.includes('oppositecar') || child.name.includes('carMercedes') || child.name.includes('oppositecarMercedes'));

    cars.forEach(car => {
        if (car.position.x < -11000) {
            sceneGraph.remove(car);
        }
    });

    // Atualização da posição dos carros com opposite
    cars.forEach(car => {
        if (car.name.includes('opposite')) {
            car.position.x -= velocityopposite;
        } else {
            car.position.x -= velocity;
        }
    });
    
    velocityopposite += 0.02;
    velocity += 0.005;


    requestAnimationFrame(() => updateCarsPosition(sceneGraph));
}

function updateSunAndMoonPosition() {
    const sunLight = sceneElements.sceneGraph.getObjectByName("sunLight");
    const moonLight = sceneElements.sceneGraph.getObjectByName("moonLight");

    // Define o raio do círculo
    const radius = 5000;

    // Define a velocidade angular de rotação (em radianos por frame ou por segundo, dependendo da sua configuração)
    const angularSpeed = 0.0001; // Ajuste conforme necessário

    // Obtém o tempo atual (você pode precisar ajustar como obtém o tempo com base na sua configuração)
    const time = Date.now();

    // Calcula o ângulo com base no tempo
    const angle = angularSpeed * time;

    // Calcula as novas posições para sol e lua
    const sunY = radius * Math.sin(angle); // Movimento circular no eixo Y
    const sunZ = radius * Math.cos(angle); // Movimento circular no eixo Z
    const moonY = -sunY; // Posição oposta ao sol no eixo Y
    const moonZ = -sunZ; // Posição oposta ao sol no eixo Z

    // Atualiza as posições dos objetos do sol e da lua
    sunLight.position.set(2000, sunY, sunZ);
    moonLight.position.set(2000, moonY, moonZ);

    if (sunLight.position.y < 0) {
        sunLight.intensity = 0;
    } else {
        sunLight.intensity = 1.5;
    }
}

function controlSkylinePosition() {
    // Control Skyline
    const skyline = sceneElements.sceneGraph.getObjectByName("nissanSkyline");

    var velocity;

    var limite = 1

    limite += limite + 0.05;

    // if (limite > 80) {
    //     limite = 80;
    // }

    var curvage = 14 + 10 * Math.log(limite);

    if (keyShift) { 
        velocity = 22; 
    } else { 
        velocity = 14; 
    }

    if (keyW) { 
        if (skyline.position.x < 3000 ) { // Não mova para frente se já estiver no limite superior
            skyline.translateX(velocity);
        }
    }
    if (keyA) {
        if (skyline.position.z > -550) { // Não mova para a esquerda se já estiver no limite esquerdo
            skyline.rotation.y = Math.max(skyline.rotation.y + 0.01, -Math.PI / 6);
            skyline.translateZ(-curvage);
        }
        else {
            if (skyline.rotation.y > 0) {
                skyline.rotation.y = Math.max(skyline.rotation.y - 0.01, 0);
            } else if (skyline.rotation.y < 0) {
                skyline.rotation.y = Math.min(skyline.rotation.y + 0.01, 0);
            }
        }
    } else if (keyD) {
        if (skyline.position.z < 190) { // Não mova para a direita se já estiver no limite direito
            skyline.rotation.y = Math.min(skyline.rotation.y - 0.01, Math.PI / 6);
            skyline.translateZ(curvage);
        }
        else {
            if (skyline.rotation.y > 0) {
                skyline.rotation.y = Math.max(skyline.rotation.y - 0.01, 0);
            } else if (skyline.rotation.y < 0) {
                skyline.rotation.y = Math.min(skyline.rotation.y + 0.01, 0);
            }
        }
    } else {
        if (skyline.rotation.y > 0) {
            skyline.rotation.y = Math.max(skyline.rotation.y - 0.01, 0);
        } else if (skyline.rotation.y < 0) {
            skyline.rotation.y = Math.min(skyline.rotation.y + 0.01, 0);
        }
    }
    if (keyS) {
        if (skyline.position.x > -500) { // Não mova para trás se já estiver no limite inferior
            skyline.translateX(-velocity);
        }
    }
    
}


function computeFrame() {
    // Update skyline position
    controlSkylinePosition();

    // Update sun and moon position
    updateSunAndMoonPosition();

    // Rendering
    helper.render(sceneElements);

    // Animation
    //Call for the next frame
    requestAnimationFrame(computeFrame);
}

function animatePlanes() {
    // Obtenha todos os planos na cena
    const plane = sceneElements.sceneGraph.getObjectByName("plane");
    const plane2 = sceneElements.sceneGraph.getObjectByName("plane2");
    const plane3 = sceneElements.sceneGraph.getObjectByName("plane3");

    plane.speed += 0.02;
    plane2.speed += 0.02;
    plane3.speed += 0.02;

    // Mova os planos
    plane.position.x -= plane.speed;
    plane2.position.x -= plane2.speed;
    plane3.position.x -= plane3.speed;

    // Se um plano sair da tela, coloque-o de volta no final
    if (plane.position.x < -12000) {
        plane.position.x = -2000;
    }
    if (plane2.position.x < -12000) {
        plane2.position.x = -2000;
    }
    if (plane3.position.x < -12000) {
        plane3.position.x = -2000;
    }


    // Chame a próxima animação de quadro
    requestAnimationFrame(animatePlanes);
}



// Call functions:
//  1. Initialize the empty scene
//  2. Add elements within the scene
//  3. Animate

async function init() {
    helper.initEmptyScene(sceneElements);
    scene.load3DObjects(sceneElements.sceneGraph);
    requestAnimationFrame(computeFrame);
    await new Promise(r => setTimeout(r, 20000));
    spawnCars(sceneElements.sceneGraph);
    animatePlanes();
    await new Promise(r => setTimeout(r, 2000));
    updateCarsPosition(sceneElements.sceneGraph);
}

// HANDLING EVENTS

// Event Listeners

window.addEventListener('resize', resizeWindow);


//To keep track of the keyboard - WASD
var keyD = false, keyA = false, keyS = false, keyW = false, keyShift = false;
document.addEventListener('keydown', onDocumentKeyDown, false);
document.addEventListener('keyup', onDocumentKeyUp, false);

// Update render image size and camera aspect when the window is resized
function resizeWindow(eventParam) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sceneElements.camera.aspect = width / height;
    sceneElements.camera.updateProjectionMatrix();

    sceneElements.renderer.setSize(width, height);

    // Comment when doing animation
    // computeFrame(sceneElements);
}


function onDocumentKeyDown(event) {
    switch (event.keyCode) {
        case 68: //d
            keyD = true;
            break;
        case 83: //s
            keyS = true;
            break;
        case 65: //a
            keyA = true;
            break;
        case 87: //w
            keyW = true;
            break;
        case 16: //shift
            keyShift = true;
            break;
    }
}
function onDocumentKeyUp(event) {
    switch (event.keyCode) {
        case 68: //d
            keyD = false;
            break;
        case 83: //s
            keyS = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 87: //w
            keyW = false;
            break;
        case 16: //shift
            keyShift = false;
            break;
    }
}


// STARTING

init();