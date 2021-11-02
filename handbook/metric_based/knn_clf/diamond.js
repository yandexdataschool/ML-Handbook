if (window.CanvasRenderingContext2D) {
    CanvasRenderingContext2D.prototype.diamond = function(x, y, width, height) {
      // if values are not set just exit
      if(!x || !y || !width || !height) { return true; }
  
      this.beginPath();
      this.moveTo(x, y+height);
      this.lineTo(x+width, y);
      this.lineTo(x, y-height);
      this.lineTo(x-width, y);
      this.lineTo(x, y+height); 
      this.closePath();  
    };
  }