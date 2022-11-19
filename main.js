class Slider {
    constructor (selector){
        this.move = this.move.bind(this)
        this.Slider = document.querySelector(selector);
        this.interval = null;
        this.contador = 0;
        this.start();
    }

    start (){
        this.interval = window.setInterval(this.move,1000);
    }

    move(){
        let itemsCount = document.querySelectorAll(".container > *").length;
        console.log(itemsCount);
        this.contador += 1;
        this.moveTo(this.contador);
    }

    moveTo(index){
        let left = index * 100;

        this.slider.querySelector(".container").style.left = "-"+left+"%";
    }
}

(function () {
    new Slider (".slider")

})();