
function MoveImage(num){
    const mainImage = document.getElementById('main');
      if(num == 1){
        mainImage.src = "../images/fashion-page/saree1.png";
      }
      else if(num == 2){
        mainImage.src = "../images/fashion-page/saree2.png";
      }
      else if(num == 3){
        mainImage.src = "../images/fashion-page/sarree3.png";
      }
      else if(num == 4){
        mainImage.src = "../images/fashion-page/saree1.png";
      }
      else if(num == 5){
        mainImage.src = "../images/fashion-page/saree1.png";
      }
    }
    
    const quantElement = document.getElementById('quantity'); 
    
    function incre(){
      let quantity = parseInt(quantElement.innerText);
      quantElement.innerText = ++quantity;
    }
    function dece(){
        let quantity = parseInt(quantElement.innerText);
        if(quantity>1){
            quantElement.innerText = --quantity;
        }
    }
    function rating(num){
    const rate = document.getElementById('rate');
    if(num == 1){
        rate.src = "../images/fashion-page/star.png";  
    } 
      } 