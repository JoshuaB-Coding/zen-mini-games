class Ball {
    constructor(x, y, fillStyle = 'white') {
        this.x = x;
        this.y = y;
        this.fillStyle = fillStyle;

        this.u = 0;
        this.v = 0;
    }

    updateVelocity() {
        this.u *= 0.8;
        this.v *= 0.8;
    }

    velocityMagnitude() {
        return Math.sqrt(this.u*this.u + this.v*this.v);
    }

    updatePosition(dt) {
        this.x += this.u * dt;
        this.y += this.v * dt;
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