AFRAME.registerComponent("flying-fish",{
    init:function(){
        for(var i=1 ;i<=20 ;i++){
            var id = `fish${id}`;
            var posX = Math.floor(Math.random() * 200 + -1000);
            var posY = Math.floor(Math.random() * 2 + -1);
            var posZ = Math.floor(Math.random() * 200 + -1000);
            var position = {x:posX,y:posY,z:posZ};
            this.fishflying(id,position);
        }
    },
    fishflying:(id,position)=>{
        var terrainEl = document.querySelector("#island");
        var fishEl = document.createElement("a-entity");
        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("scale",{x:0.1,y:0.1,z:0.1});
        fishEl.setAttribute("gltf-model","./models/fish/scene.gltf");
        fishEl.setAttribute("animation-mixer",{});
        terrainEl.appendChild(fishEl);
    }
});