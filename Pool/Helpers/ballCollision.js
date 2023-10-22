/*
 * EXPLANATION OF THE MATHEMATICS
 * 
 * Resolve velocities along two directions: c and n
 * - c => conserved
 * - n => the other line
 * 
 * Conserve momentum along direction c
 * Apply restitution along direction c
 * 
 * Resolve c and n directions to x and y
 * 
 * Update ball velocities accordingly
 */

const applyBallCollision = (ball1, ball2) => {
    const collisionLine = calculateCollisionLine(ball1, ball2);
    const complimentaryLine = calculateComplimentaryLine(collisionLine);

};

const calculateCollisionLine = (ball1, ball2) => {
    const directionX = ball2.u - ball1.u;
    const directionY = ball2.v - ball1.v;

    const magnitude = Math.sqrt(directionX*directionX + directionY*directionY);

    return {
        x: directionX / magnitude,
        y: directionY / magnitude,
        angle: Math.atan(directionY / directionX), // relative to positive x
    };
};

const calculateComplimentaryLine = (collisionLine) => {
    const rotatedX = collisionLine.x * Math.cos(collisionLine.angle) + collisionLine.y * Math.sin(collisionLine.angle);
    const rotatedY = collisionLine.x * Math.sin(-collisionLine.angle) + collisionLine.y * Math.cos(collisionLine.angle);

    return {
        x: rotatedX,
        y: rotatedY,
    };
}

export default applyBallCollision;