class Animal{
    speak(){
        console.log("ALl animal can speak")
    }
}

class Cow extends Animal {
 speak(){
    console.log("Cow mows")
 }
}

class kitten extends Animal{
    speak(){
        console.log("kitten meowss")
    }
}

const cow = new Cow();
const kitty = new kitten();
const animal = new Animal()
cow.speak()
kitty.speak()
animal.speak()