AFRAME.registerComponent("coin-collect", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var islandEl = document.querySelector("#island");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("scale",{x:500,y:500,z:500})
      coinEl.setAttribute("gltf-model","./models/coin/scene.gltf");
      coinEl.setAttribute("animation-mixer",{});   
  
      islandEl.appendChild(coinEl);
    }
  });