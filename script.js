var heroImages = [
  "./assets/header_image.jpg",
  "./assets/header_image2.jpg",
  "./assets/header_image3.jpg",
  "./assets/header_image4.jpg",
  "./assets/header_image5.jpg",
];


var heroImage = document.getElementById("hero_img");
var currentIndex = 0;

function righButton(){
  if(currentIndex === heroImages.length - 1){
    currentIndex = 0;
  }
  else{
    currentIndex++;
  }
  
  heroImage.src = heroImages[currentIndex];
}

function leftButton(){
  if(currentIndex === 0){
    currentIndex = heroImages.length -1;
  }
  else{
    currentIndex--;
  }
  heroImage.src = heroImages[currentIndex];
}


var productLarge = document.getElementById("product_large");
var productSmall = document.getElementsByClassName("product_small");


productSmall[0].onclick = function(){
  productLarge.src = productSmall[0].src;
}

productSmall[1].onclick = function(){
  productLarge.src = productSmall[1].src;
}

productSmall[2].onclick = function(){
  productLarge.src = productSmall[2].src;
}

productSmall[3].onclick = function(){
  productLarge.src = productSmall[3].src;
}



function expandPara1() {
  document.getElementById("para1").innerText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magni. Et in voluptates tempora placeat architecto, voluptate nesciunt hic! Voluptatem sint unde fugiat eum dignissimos accusamus exercitationem optio tenetur sequi ex. Distinctio dolores sit culpa soluta ipsum impedit architecto eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magni. Et in voluptates tempora placeat architecto, voluptate nesciunt hic! Voluptatem sint unde fugiat eum dignissimos";

}

function expandPara2() {
  document.getElementById("para2").innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magni. Et in voluptates tempora placeat architecto, voluptate nesciunt hic! Voluptatem sint unde fugiat eum dignissimos accusamus exercitationem optio tenetur sequi ex. Distinctio dolores sit culpa soluta ipsum impedit architecto eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magni. Et in voluptates tempora placeat architecto, voluptate nesciunt hic! Voluptatem sint unde fugiat eum dignissimos";
}

function expandPara3() {
  document.getElementById("para3").innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magni. Et in voluptates tempora placeat architecto, voluptate nesciunt hic! Voluptatem sint unde fugiat eum dignissimos accusamus exercitationem optio tenetur sequi ex. Distinctio dolores sit culpa soluta ipsum impedit architecto eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magni. Et in voluptates tempora placeat architecto, voluptate nesciunt hic! Voluptatem sint unde fugiat eum dignissimos";
}

