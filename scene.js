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

        const nissanSkyline = createNissanSkyline(-100, 0);
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


        // ************************** //
        // Create Cars
        // ************************** //

        // const testingcar = createOppositeTruck(500, -870);
        // sceneGraph.add(testingcar);

    }
};

let spawnInterval = 5000; // Início com 1 segundo
let minSpawnInterval = 1000; // Intervalo mínimo de spawn
let line = 250; // Distância entre as linhas
let gameRunning = true;

async function spawnCars(sceneGraph) {
    // Seleciona aleatoriamente um tipo de carro
    const randomCarIndex = Math.floor(Math.random() * 3); // Gera um número aleatório entre 0 e 3
    let selectedCar;

    switch (randomCarIndex) {
        case 0:
            selectedCar = createCar(9000, 130);
            selectedCar.name = "car";
            break;
        case 1: 
            selectedCar = createCarMercedes(9000, 220);
            selectedCar.name = "carMercedes";
            break;
        case 2:
            selectedCar = createSportsCar(9000, 130);
            selectedCar.name = "sportscar";
            break;
        default:
            selectedCar = createCar(9000, 130); // Caso algo dê errado, escolha um carro padrão
            selectedCar.name = "car";
    }
    // Adiciona o carro selecionado à cena
    sceneGraph.add(selectedCar);
    if (Math.random() < 0.5) {
        selectedCar.position.z += 0;
        if (Math.random() < 0.2) {
            secondCar = createTruck(9000, 620);
            secondCar.position.z += line;
            secondCar.name = "truck";
            sceneGraph.add(secondCar);
        }
    } else {
        selectedCar.position.z += line;
        if (Math.random() < 0.2) {
            secondCar = createTruck(9000, 620);
            secondCar.position.z += 0
            secondCar.name = "truck";
            sceneGraph.add(secondCar);
        }
    }
    
    await new Promise(r => setTimeout(r, spawnInterval));
    if (spawnInterval > minSpawnInterval){
        spawnInterval -= 500;
    }

    if (!gameRunning) {
        return;
    }
    requestAnimationFrame(() => spawnCars(sceneGraph));
}


let spawnIntervalOpposite = 2000; // Início com 1 segundo
let minSpawnIntervalOpposite = 800; // Intervalo mínimo de spawn

async function spawnOppositeCars(sceneGraph) {
    // Seleciona aleatoriamente um tipo de carro
    const randomCarIndex = Math.floor(Math.random() * 3); // Gera um número aleatório entre 0 e 3
    let selectedCar;

    switch (randomCarIndex) {
        case 0:
            selectedCar = createOppositeCar(9000, -370);
            selectedCar.name = "oppositecar";
            break;
        case 1:
            selectedCar = createOppositeCarMercedes(9000, -470);
            selectedCar.name = "oppositecarMercedes";
            break;
        case 2:
            selectedCar = createOppositeSportsCar(9000, -370);
            selectedCar.name = "oppositesportscar";
            break;
        default:
            selectedCar = createOppositeCar(9000, -370); // Caso algo dê errado, escolha um carro padrão
            selectedCar.name = "oppositecar";
    }
    // Adiciona o carro selecionado à cena
    sceneGraph.add(selectedCar);
    if (Math.random() < 0.5) {
        selectedCar.position.z += 0;
        if (Math.random() < 0.1) {
            secondCar = createOppositeTruck(9000, -870);
            secondCar.position.z += line;
            secondCar.name = "oppositeTruck";
            sceneGraph.add(secondCar);
        }
    } else {
        selectedCar.position.z += line;
        if (Math.random() < 0.1) {
            secondCar = createOppositeTruck(9000, -870);
            secondCar.position.z += 0
            secondCar.name = "oppositeTruck";
            sceneGraph.add(secondCar);
        }
    }

    await new Promise(r => setTimeout(r, spawnIntervalOpposite));
    if (spawnIntervalOpposite > minSpawnIntervalOpposite){
        spawnIntervalOpposite -= 60;
    }

    if (!gameRunning) {
        return;
    }
    requestAnimationFrame(() => spawnOppositeCars(sceneGraph));
}


let velocityopposite = 30;
let velocity = 10;
let velocitytruckopposite = velocityopposite - 5;
let velocitytruck = velocity - 5;

function updateCarsPosition(sceneGraph) {
    // Remoção de carros que atingiram a posição -2000
    const cars = sceneGraph.children.filter(child => 
        (child.name.includes('car') || child.name.includes('oppositecar') || 
        child.name.includes('carMercedes') || child.name.includes('oppositecarMercedes') || 
        child.name.includes('sportscar') || child.name.includes('oppositesportscar')));

    const trucks = sceneGraph.children.filter(child =>
        (child.name.includes('truck') || child.name.includes('oppositeTruck')));

    cars.forEach(car => {
        if (car.position.x < -11000) {
            sceneGraph.remove(car);
        }
    });

    trucks.forEach(truck => {
        if (truck.position.x < -11000) {
            sceneGraph.remove(truck);
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

    trucks.forEach(truck => {
        if (truck.name.includes('opposite')) {
            truck.position.x -= velocitytruckopposite;
        } else {
            truck.position.x -= velocitytruck;
        }
    });
    
    velocityopposite += 0.05;
    velocity += 0.03;
    velocitytruckopposite = velocityopposite - 5;
    velocitytruck = velocity + 5;


    if (!gameRunning) {
        return;
    }
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

    headlight_skyline_left = sceneElements.sceneGraph.getObjectByName("headlight_skyline_left");
    headlight_skyline_right = sceneElements.sceneGraph.getObjectByName("headlight_skyline_right");
    lamp_post = sceneElements.sceneGraph.getObjectByName("lamp");
    reverse_lamp_post = sceneElements.sceneGraph.getObjectByName("lampreverse");

    // Ajusta a intensidade das luzes com base na posição do sol
    if (sunLight.position.y < 30) {
        sunLight.intensity = 0;
        headlight_skyline_left.intensity = 2;
        headlight_skyline_right.intensity = 2;
        sceneElements.sceneGraph.traverse(function(object) {
            if (object.name.includes("lamp")) {
                object.intensity = 2;
            }
        });
    } else {
        sunLight.intensity = 1.5;
        headlight_skyline_left.intensity = 0;
        headlight_skyline_right.intensity = 0;
        sceneElements.sceneGraph.traverse(function(object) {
            if (object.name.includes("lamp")) {
                object.intensity = 0;
            }
        });
    }
}

function controlSkylinePosition() {
    // Control Skyline
    const skyline = sceneElements.sceneGraph.getObjectByName("nissanSkyline");
    const skylineBoundingBox = new THREE.Box3().setFromObject(skyline);

    // Check for collision with cars
    const cars = sceneElements.sceneGraph.children.filter(child =>
        child.name.includes('car') || child.name.includes('oppositecar') ||
        child.name.includes('carMercedes') || child.name.includes('oppositecarMercedes') ||
        child.name.includes('sportscar') || child.name.includes('oppositesportscar') ||
        child.name.includes('truck') || child.name.includes('oppositeTruck')
    );

    let isColliding = false;

    cars.forEach(car => {
        const carBoundingBox = new THREE.Box3().setFromObject(car);
        if (skylineBoundingBox.intersectsBox(carBoundingBox)) {
            isColliding = true;
        }
    });

    if (isColliding) {
        gameOver();
        return;
    }

    var velocity;

    var limite = 1

    limite += limite + 0.1;

    var curvage = 22;

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
        if (skyline.position.z > -370) { // Não mova para a esquerda se já estiver no limite esquerdo
            if (skyline.rotation.y < 0.1) {
                skyline.rotation.y = skyline.rotation.y + 0.01;
            }
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
        if (skyline.position.z < 370) { // Não mova para a direita se já estiver no limite direito
            if (skyline.rotation.y > -0.1) {
                skyline.rotation.y = skyline.rotation.y - 0.01;
            }
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

    plane.speed += 0.05;
    plane2.speed += 0.05;
    plane3.speed += 0.05;

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
    
    if (!gameRunning) {
        return;
    }
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
}

let intervalDuration = 1000;

async function startGame() {
    gameRunning = true;
    score = 0; // Inicializa o score antes de começar o jogo
    intervalDuration = 1000;
    spawnCars(sceneElements.sceneGraph);
    spawnOppositeCars(sceneElements.sceneGraph);
    animatePlanes();
    updateCarsPosition(sceneElements.sceneGraph);
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('finalScore').style.display = 'none';
    document.getElementById('highScore').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    updateScore();
}

async function updateScore() {
    score += 1;
    document.getElementById('score').textContent = 'Score: ' + score;
    if (intervalDuration > 150) { 
        intervalDuration -= 10;
    } else if (intervalDuration > 100) {
        intervalDuration -= 3;
    } else if (intervalDuration > 70) {
        intervalDuration -= 1;
    }

    await new Promise(r => setTimeout(r, intervalDuration));
    if (gameRunning) {
        updateScore();
    }

}

// Função para reiniciar o jogo
async function restartGame() {
    // Limpa a cena
    cars = sceneElements.sceneGraph.children.filter(child =>
        child.name.includes('car') || child.name.includes('oppositecar') ||
        child.name.includes('carMercedes') || child.name.includes('oppositecarMercedes') ||
        child.name.includes('sportscar') || child.name.includes('oppositesportscar') ||
        child.name.includes('truck') || child.name.includes('oppositeTruck')
    );

    cars.forEach(car => {
        sceneElements.sceneGraph.remove(car);
    });

    plane = sceneElements.sceneGraph.getObjectByName("plane");
    plane2 = sceneElements.sceneGraph.getObjectByName("plane2");
    plane3 = sceneElements.sceneGraph.getObjectByName("plane3");

    // Reinicia os intervalos e variáveis relacionadas ao jogo
    spawnInterval = 5000;
    spawnIntervalOpposite = 2000;
    velocityopposite = 30;
    velocity = 10;
    velocitytruckopposite = velocityopposite - 5;
    velocitytruck = velocity - 5;
    plane.speed = 10;
    plane2.speed = 10;
    plane3.speed = 10;

    skyline = sceneElements.sceneGraph.getObjectByName("nissanSkyline");
    skyline.position.x = -100;
    skyline.position.z = 0;

    document.getElementById('restartButton').style.display = 'none';
    // Reinicia o jogo
    startGame();

    // Esconde o botão de Restart
}

// Event Listener para o botão de Start
document.getElementById('startButton').addEventListener('click', startGame);

// Event Listener para o botão de Restart
document.getElementById('restartButton').addEventListener('click', restartGame);

// Função para encerrar o jogo e exibir "Game Over"
function gameOver() {
    gameRunning = false;
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('restartButton').style.display = 'block';
    document.getElementById('score').style.display = 'none';
    document.getElementById('finalScore').style.display = 'block';
    document.getElementById('finalScore').textContent = 'Final Score: ' + score; 
    document.getElementById('score').textContent = 'Score: 0';
    if (localStorage.getItem('highScore') === null || score > localStorage.getItem('highScore')) {
        localStorage.setItem('highScore', score);
    }
    document.getElementById('highScore').textContent = 'High Score: ' + localStorage.getItem('highScore');
    document.getElementById('highScore').style.display = 'block';
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