class Counter{
    constructor(){
        this.displaynum=document.getElementById("display");
        this.startstopBtn=document.querySelector(".startStopbtn");
        this.incrementBtn=document.querySelector(".incrementbtn");
        this.decrementBtn=document.querySelector(".decrementbtn");
        this.startstopBtn.addEventListener("click", this.startstop.bind(this));
        this.incrementBtn.addEventListener("click",this.increment.bind(this));
        this.decrementBtn.addEventListener("click",this.decrement.bind(this));
        this.count=0;
        this.autoIncrement=true;
        this.id=null;
    }
    startstop(){
        if(this.autoIncrement){
            this.start();
            this.autoIncrement=false;
            this.startstopBtn.textContent="Stop";
        }
        else{
            this.stop();
            this.autoIncrement=true;
            this.startstopBtn.textContent="Start";
        }
    }
    start(){
        this.id=setInterval(() => {
            this.count++;
            this.displaynum.textContent=(this.count < 10 && this.count > 0 ? "0" : "")+this.count;
        },1000);
    }
    stop(){
        clearInterval(this.id)
    }
    increment(){
        this.stop();
        this.count++
        this.displaynum.textContent=(this.count < 10 && this.count > 0 ? "0" : "")+this.count;
    }
    decrement(){
        this.stop();
        this.count--;
        this.displaynum.textContent=(this.count < 10 && this.count > 0 ? "0" : "")+this.count;
    }
}
const counter =new Counter();