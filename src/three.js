import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/addons/renderers/CSS2DRenderer.js";

/* Dette er min fil der arbejder med three.js. Three js er en javascript library der 
kommer med en masse pre-lavede funktioner, som man så kan bruge til at lave 3D objekter med */

/* Laver her en masse variabler som jeg gerne vil gøre brug af over flere funktioner
De kan ikke laves inden i funktioner, fordi variabler der laves sådan kun kan bruges lokalt. */
let clock,
  sunMesh,
  sunLabelElement,
  earthMesh,
  earthLabelElement,
  cloudsMesh,
  pointLight,
  animateParams;
let elapsedTime = 0;

/* Denne funktioner exporteres. Dette betyder den kan bruges i flere javascript filer.
Denne her funktion går blot ind i scenen, og slår synligheden for alle dens children til / fra.
Children er bare elementer eller objekter inden i et objekt. Scenen har exempelvis planeter som children
da de eksisterer inden i scenen. .traverse funktionen iterer over alle objekter i scenen, og siger,
hvis child er en form for mesh, skal den være synlig / usynlig */
export function toggleVisible(scene, visible) {
  console.log("toggled");
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.visible = visible;
    }
  });
}

/* Dette er også en exportert funktion. Den initialiserer scenen. Altså laver den scenen. */
export function initScene() {
  /* Her hentes nogle elemeneter fra html filen. Bland andet canvas. Canvas er der, hvor three js laver 
  sine objekter og scene. DOM er bare en måde, som hele websiden repræsenteres på, så den kan ændres. 
  Alle objekter på websiden er dom elementer. Man henter et dom element, ved enten af give den html tag,
  dens class eller dens id. Her, bliver det cavasen med class three js */
  const canvas = document.querySelector("canvas.threejs");

  /* Her laves der 2 div elementer. De får hver en class, såvel som noget html. Disse bruges som labels senere */
  earthLabelElement = document.createElement("div");
  earthLabelElement.className = "earth-label";
  earthLabelElement.innerHTML = `<p class="hastighed">Hastighed:10</p><p class="selv-hastighed">Hastighed Selv:1</p><p class="rotation">rotation sol:1</p>`;
  sunLabelElement = document.createElement("div");
  sunLabelElement.className = "sun-label";
  sunLabelElement.innerHTML = "<p class='lys'>lystyrke:10%</p>";

  /* Her laves en renderer. En renderer tager blot scenen, og laver den om til et billede som brugeren kan se*/
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  /* Rendererns størrelse sættes så den fylder hele vinduet */
  renderer.setSize(window.innerWidth, window.innerHeight);
  /* Hver computer, telefon og tablet har en pixel ratio. Det er forholdet mellem fysiske pixels på skærmen og Css pixels eller de pixels vi arbejder med i koden.
  For eksempel: En enhed med en devicePixelRatio på 2 har 2 fysiske pixels for hver 1 css pixel. Ved at sætte pixel ration til den mindste af brugerens enheds pixelratio
  eller 2, sørger vi for at sikrer vi, at vi ikke overbelaster grafikmotoren med unødvendigt høj opløsning på meget højopløselige skærme som 4-k  */
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  /* Her laver vi label renderern */
  const labelRenderer = new CSS2DRenderer();
  /* Vi sætter dens størrelse, såvel som sørger for den flyder hele skærmen, uden at man kan interegere med den */
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0px";
  labelRenderer.domElement.style.pointerEvents = "none";
  /* Denne renderer tilføjes vores html body */
  document.body.appendChild(labelRenderer.domElement);

  /* For at kunne åbne op for billeder som kan bruges som textures, har vi brug for en textureloader */
  const textureLoader = new THREE.TextureLoader();
  /* Til baggrunden har vi også brug for en cubetextureloader, så vi kan lave en 3D miljø */
  const cubeTextureLoader = new THREE.CubeTextureLoader();

  /* Nu kan vi lave en kamera, som vil være hvorfra vi observerer vores scene. */
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;

  /* Her laver vi vores scene, en scene er der hvor alt vil blive renderet, altså vist. Ligesom i et teaterstykke */
  const scene = new THREE.Scene();
  /* kameraen her er en perspektivkamera. Dette betyder, at ting der er tættere på vil være større, og ting der
  er længere væk vil være mindre. */
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  /* Her sørges der for, at kameraet kigger ind mod midten af scenen. */
  camera.lookAt(0, 0, 0);
  /* Selve kameraet har dog en anden position: */
  camera.position.set(0, 20, 22);

  /* For at vores matrialer kan have dybde har vi brug for lys. Her laves der blandt andet ambientlighting og pointligt.
  Ambient lyset lyser objektet fra alle sider. Den har brug for en farve for lyset, såvel som en intensitet */
  const light = new THREE.AmbientLight(0xff75ed, 0.2);
  /* Derefter har vi en pointlight. Dette er en lys der lyser ud fra et specifikt punkt ud i alle retninger. Den ligger som
  standard ved 0,0,0. Den har også brug for en farve og en lysintensitet */
  pointLight = new THREE.PointLight(0xffffff, 500);

  /* For at lysene kan ses, bliver de nødt til at være inden i scenen. Igen som i et teaterstykke. Aktører der ikke er
  på scenen ses ikke */
  scene.add(light, pointLight);

  /* Her loader vi vores textures. Vi gør brug af vores texture loader, som kun indtager en filsti til den textur vi vil 
  loade. */
  const earth_albedo = textureLoader.load(
    "static/textures/earthTexture/earth_albedo.jpg"
  );
  const earth_normal = textureLoader.load(
    "static/textures/earthTexture/earth_normal.png"
  );

  const cloud_albedo = textureLoader.load(
    "static/textures/earthTexture/cloud_base.jpg"
  );

  const cloud_alpha = textureLoader.load(
    "static/textures/earthTexture/cloud_alpha.png"
  );

  const sun_albedo = textureLoader.load("static/textures/sunTexture/sun.jpg");

  /* Vi bruger en CubeTextureLoader til at loade en cubemap. En cubemap er en tekstur, der består af 6 billeder
   en for hver af de seks sider af en terning. Når disse billeder bruges som en tekstur, giver de en 3D effekt, 
   hvor objekter ser ud som om de er omgivet af en himmel eller et miljø som hvis de var inde i en terning. */
  const background_cubemap = cubeTextureLoader.load([
    "static/textures/backgroundTexture/bgCube/px.png",
    "static/textures/backgroundTexture/bgCube/nx.png",
    "static/textures/backgroundTexture/bgCube/py.png",
    "static/textures/backgroundTexture/bgCube/ny.png",
    "static/textures/backgroundTexture/bgCube/pz.png",
    "static/textures/backgroundTexture/bgCube/nz.png",
  ]);

  /* Vi sætter scenens baggrund til denne cubemap */
  scene.background = background_cubemap;

  /* Texturer er billeder, der bruges  på overfladen af et 3D objekt for at give det et realistisk udseende.
   For eksempel kan en kjole have en blomstertekstur, som får den til at se ud som om den har blomster på.
   Materialer  bestemmer objektets fysiske egenskaber, som foreksempel hvordan det reagerer på lys eller 
   hvordan det føles at røre ved. En kjole kan have et silke-materiale der giver en glat og reflekterende overflade. */
  /* Her laver vi nogle materialer. Et MeshPhysicalMaterial er et af de mest avancerede materialer, 
   og det fungerer på samme måde som materialer i Unity eller Blender. Vi sætter materialets map property til en 
   tekstur vi tidligere har loadet. Dette gør, at objektet får den specifikke tekstur, der er tilknyttet materialet.

   Vi bruger også normalMap property. En normalmap skaber illusionen af en 3D overflade ved at ændre, 
   hvordan lys interagerer med objektets overflade uden at ændre objektets form. 
   Dette betyder, at teksturen får skygger i de dybere områder, hvilket giver objektet et mere detaljeret og realistisk udseende. */

  const earthMaterial = new THREE.MeshPhysicalMaterial({
    map: earth_albedo,
    normalMap: earth_normal,
  });
  const cloudMaterial = new THREE.MeshPhysicalMaterial({
    map: cloud_albedo,
    alphaMap: cloud_alpha,
    transparent: true,
  });

  /* Dette er en meshbasic matriale, og tager derfor ikke effekt af den lys der eksisterer i scenen. Dette er nødvendigt, 
  da dette er solen. Den har også en farve, som ganges med farven af teksturen der tilføjes. */
  const sunMaterial = new THREE.MeshBasicMaterial({
    map: sun_albedo,
    color: new THREE.Color(0xffc400),
  });

  /* Her laver vi selve geometrien af vores objekter. Dette er en kugle geometri. Den indtager en radius, såvel som
  hvor mange flader der skal være horizontalt og vertikalt. Jo flere flader, jo glattere bliver formen.*/
  const sphereGemometry = new THREE.SphereGeometry(1, 32, 32);

  /* Her opretter vi vores meshes. En mesh består af en geometri og et materiale.
   Geometrien definerer objektets form og struktur, altså om det er en kube, kugle, eller andet.
   Materialet bestemmer, hvordan objektets overflade ser ud, altså dens teksturer, farver, refleksioner osv.
   
   Mesene er objekterne i vores scene, som vi kan se og interagere med. */
  earthMesh = new THREE.Mesh(sphereGemometry, earthMaterial);
  cloudsMesh = new THREE.Mesh(sphereGemometry, cloudMaterial);
  sunMesh = new THREE.Mesh(sphereGemometry, sunMaterial);

  /* Her laver vi nogle CSS2DObjekter. Dette er en anden library der hjælper os med at placere 2D objekter i en 3D
  scene. Til dette har vi brug for nogle CSS2DObjekter. De tager udgangspunkt i nogle 2D div elementer vi lavede i 
  starten */
  const earthLabelObject = new CSS2DObject(earthLabelElement);
  const sunLabelObject = new CSS2DObject(sunLabelElement);

  /* Vi giver disse labelobjekter en position, og tilføjer dem som børn til den objekt de skal være tilknyttede.
  Da de tilføjes til en objekt og ikke scenen, vil deres position være i forhold til positionen af den objekt de
  er børn af. Vi kan derfor nøjes med blot at ændre y positionen, da vi gerne vil have at disse labels er lidt højere
  end vores objekter. Vi vil ikke have at de blokerer for objektet. */
  earthLabelObject.position.set(0, 3.5, 0);
  earthMesh.add(earthLabelObject);

  sunLabelObject.position.set(0, 1.6, 0);
  sunMesh.add(sunLabelObject);

  /* Vi lavede kun en kugle geometri, men vores sol og jord og skyer bør ikke være samme størrelse. Vi ændrer derfor 
  deres størrelser ved at gange deres størrelse vektor, der er en vektor3, altså har den 3 værdier, med en skalar */
  sunMesh.scale.setScalar(5);
  earthMesh.scale.setScalar(1.5);
  /* Skyerne er lidt større end jorden, so den kan roterere ordentligt og give en 3D effekt. */
  cloudsMesh.scale.setScalar(1.55);

  /* Vi bliver nødt til at flytte vores jord og skyer, da de helt skal positioneres længere væk end solen. 
  Solen forbliver ved punk 0,0,0 */
  earthMesh.position.x = 15;
  cloudsMesh.position.x = 15;

  /* Som sagt, for at disse objekter skal ses, skal de være del af scenen */
  scene.add(camera, cloudsMesh, earthMesh, sunMesh);

  /* Three.js giver os mulighed for at tilføje controllere, der gør det nemmere at bevæge sig rundt i scenen.
   En af de mest brugte er OrbitControls, som gør det muligt at rotere kameraet omkring scenen, zoome ind og ud,
   panorere, altså bevæge sig sidelæns eller op/ned.*/
  const controls = new OrbitControls(camera, renderer.domElement);
  /* For at rotereing af scenen er blød, sørger vi for at damping er slået til */
  controls.enableDamping = true;

  /* når vi skal bgynde med at ændre på vores scene, har vi brug for en ur, der kan tjekke for den tid der er gået.
  den laver vi derfor her */
  clock = new THREE.Clock();

  /* Dette er en objekt som vi gør brug af til at ændre vores GUI med. Den har burg for visse informationer */
  animateParams = {
    earthSpeed: 10,
    earthRotationSpeed: 1,
    lightIntensity: 50,
    aroundSunDirection: 1,
    rotationDirection: () => {
      animateParams.aroundSunDirection *=
        -1; /* dette er blandt andet retningen som enten er -1 eller 1. */
    },
  };

  /* Da dette er en intitaliser funktion, skal vi returnere visse ting. Dette er blandt andet scenen, camera, begge 
  renderers, controls og vores params */
  return { scene, camera, renderer, labelRenderer, controls, animateParams };
}

/* Dette er en anden exporteret funktion. Alt inden i denne her, vil blive animeret */
export function updateScene() {
  /* Mapper earthSpeed fra et interval mellem 1 og 100 til en værdi mellem 0.1 og 2. Altså konverterer den værdierne mellem
1 og 100 til værdier imellem 0.1 og 2*/
  const mappedSpeed =
    ((animateParams.earthSpeed - 1) * (2 - 0.1)) / (100 - 1) + 0.1;

  /* Mapper earthRotationSpeed fra et interval mellem 1 og 100 til 0.003 - 0.15.*/
  const mappedRotationSpeed =
    ((animateParams.earthRotationSpeed - 0.003) * (0.15 - 0.003)) / (100 - 1) +
    0.003;
  /* Henter hvor meget tid der er gået siden sidste frame. En frame vil bare være, sidste billede som renderen lavede */
  const deltaTime = clock.getDelta();
  /* Opdaterer den samlede tid baseret på hastighed og rotationsretning. Dette gør skift i hastighed og rotationretning
til at blive vist på en mere realistisk måde */
  elapsedTime += deltaTime * mappedSpeed * animateParams.aroundSunDirection;
  /* Mapper lightIntensity fra 1-100 til 1-1000 og afrunder til heltal. */
  const mappedLight = Math.round(
    ((animateParams.lightIntensity - 1) * (1000 - 1)) / (100 - 1) + 1
  );
  /* Sætter intensiteten af pointlyset baseret på den mappede værdi. */
  pointLight.intensity = mappedLight;
  /* beregner RGB-farve til solen, baseret på lysstyrken. Mapper lyset fra 1-1000 til 1 til 250, men vi siger, at
  den mindste værdi skal være 5, og max skal være 255. grøn kan ikke have hæjere værdi end rød, og dette er et valg
  jeg kom frem til ved at lege rundt med en colorwheel, da mindre grøn giver den bedste farve. Vi bruger Math.min, da 
  vi tager den mindste værdi imellem 255 og den mappede lys intensitet */
  const r = Math.min((mappedLight / 1000) * 250 + 5, 255);
  const g = Math.min((mappedLight / 1000) * 250 + 5, r - 1);

  /* Opdaterer vores sunlabel div hvis det findes. Lysintenisteten er den som vores GUI viser */
  const sunLabel = sunLabelElement.querySelector(".lys");
  if (sunLabel) {
    sunLabel.innerText = `Lystyrke: ${animateParams.lightIntensity}%`;
  }
  /* osv. */
  const speedLabel = earthLabelElement.querySelector(".hastighed");
  if (speedLabel) {
    speedLabel.innerText = `Hastighed: ${animateParams.earthSpeed}`;
  }
  const selvHastighed = earthLabelElement.querySelector(".selv-hastighed");
  if (selvHastighed) {
    selvHastighed.innerText = `Hastighed selv: ${animateParams.earthRotationSpeed}`;
  }
  const rotationLabel = earthLabelElement.querySelector(".rotation");
  if (rotationLabel) {
    rotationLabel.innerText = `Rotation Sol: ${animateParams.aroundSunDirection}`;
  }

  /* Her ændrer vi solens matriale farve baseres på vores udregnede r og g værdier. */
  sunMesh.material.color.setRGB(r / 255, g / 255, 0);
  /* Her ændrer vi jordens og skyernes ortations hastighed. */
  earthMesh.rotation.y += mappedRotationSpeed;
  cloudsMesh.rotation.y +=
    mappedRotationSpeed +
    0.002; /* Skyerne er kun en lille smule hurtigere en jorden, for realistisk effekt */

  /* Sin og cos tilsammen former en cirkel. Dette ved jeg fra trigeonomatri. Vi kan derfor finde positionen af jorden
    baseret på sin og cos af den tid der er gået nu. Vi ganger den position vi får med 15, fordi vi gerne vil have 
    at jordens bane er 15 i radius */
  earthMesh.position.x = Math.sin(elapsedTime) * 15;
  earthMesh.position.z = Math.cos(elapsedTime) * 15;
  cloudsMesh.position.x = Math.sin(elapsedTime) * 15;
  cloudsMesh.position.z = Math.cos(elapsedTime) * 15;
}
