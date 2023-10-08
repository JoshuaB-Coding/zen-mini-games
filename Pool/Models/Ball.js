class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fillStyle = 'white';

        this.u = 0;
        this.v = 0;
    }

    includeDrag() {
        this.u *= 0.8;
        this.v *= 0.8;
    }

    render = (context, actualRadius) => {
        context.beginPath();
    
        context.fillStyle = this.fillStyle;
        context.arc(this.x, this.y, actualRadius, 0, 2 * Math.PI, true);
        context.fill();

        context.closePath();
    }
}

export default Ball;