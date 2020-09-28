var wrapper = document.body;
var data = [
  {
    color:"Blue",
    num:0
  },
  {
    color:"Red",
    num:0
  },
  {
    color:"Green",
    num:0
  }
];
var elements = [];

function character(color,num) {
  var that=this;
  this.color = color;
  this.num = num;
  this.ele = document.createElement("div");
  this.ele.classList.add("style");
  this.colorEle = document.createElement("h1");
  this.numEle = document.createElement("h3");
  this.colorEle.innerHTML = this.color;
  this.numEle.innerHTML = this.num;

  this.ele.appendChild(this.colorEle);
  this.ele.appendChild(this.numEle);
  this.colorEle.style.backgroundColor=this.color
  
  this.ele.addEventListener("click", function(){
    that.changeNum();
  })
  wrapper.appendChild(this.ele);
}

character.prototype.changeNum = function () {
    this.num = this.num +1;
    this.numEle.innerHTML = this.num;
};

for(var i=0; i<data.length;i++){
  elements.push(new character(data[i].color,data[i].num))
}