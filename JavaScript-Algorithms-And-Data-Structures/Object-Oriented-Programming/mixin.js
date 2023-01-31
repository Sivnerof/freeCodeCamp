let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

const glideMixin = function(obj){
    obj.glide = function(){
      console.log('im gliding');
    };
}

glideMixin(bird);
glideMixin(boat);