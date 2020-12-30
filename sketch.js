var kh_img,kheer;

function preload(){
  kh_img = loadImage("kheer.jpg");
}
 
function setup() {
    createCanvas(1400, 600);
    kheer = createSprite(1150,120,10,20);
    kheer.addImage(kh_img);
    kheer.scale = 0.5;
   }
  
  function draw() {
    background(0);
     textSize(20);
    fill("white");
    text("RECIPE OF KHEER" ,100,100);
    text("1. Rinse ¼ cup basmati rice a couple of times and then soak in enough water for 15 to 20 mins." ,110,140);
    text("2. Meanwhile when the rice grains are soaking, take 1-litre full-fat milk in a heavy wide pan." ,110,180);
    text("3. Keep the pan on a low to medium-low flame. Stir at intervals so that the milk does not stick." ,110,220);
    text("4. Let the milk come to a boil." ,110,260);
    text("5. Take 1 tablespoon milk from the pan in a small bowl. Let the milk become warm. Then add a few saffron strands in the milk. Keep aside." ,110,300);
    text("6. After the milk begins to boil, drain all the water from the rice and add it to the hot boiling milk." ,110,340);
    text("7. Mix very well.Simmer and cook rice on a low flame. No need to cover the pan when the rice is cooking." ,110,380);
    text("8. Cook the rice grains till they are 50% done or half-cooked.Add 5 to 6 tbsp sugar" ,110,420);
    text("9. Mix well.Cook rice on a low to medium-low flame.Add ½ teaspoon cardamom powder and flavourings according to your taste" ,110,460);
    text("10. Pour the rice kheer in individual serving bowls and serve the delicious rice pudding hot." ,110,500);
    drawSprites();   
  }
     