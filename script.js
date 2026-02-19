// Snowfall Animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄️';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10 seconds
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('snowfall').appendChild(snowflake);

    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, 10000);I
}

// Create snowflakes continuously
setInterval(createSnowflake, 200); // Every 200ms

// Particle System for Divine Sparks with Circular Movement
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Position particles around the Shiva image
    const shivaImage = document.querySelector('.shiva-image');
    const rect = shivaImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Random starting angle and radius for circular orbit
    const startAngle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 100 + 50; // 50-150px from center
    const x = centerX + Math.cos(startAngle) * radius;
    const y = centerY + Math.sin(startAngle) * radius;

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    // Set custom properties for circular animation
    particle.style.setProperty('--radius', radius + 'px');
    particle.style.setProperty('--start-angle', startAngle + 'rad');

    document.body.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 5000); // Longer duration for circular movement
}

// Create cosmic elements
function createCosmicElement() {
    const cosmicElement = document.createElement('div');
    cosmicElement.className = 'cosmic-element';
    cosmicElement.textContent = ['✨', '🌟', '🕉️', '🔥'][Math.floor(Math.random() * 4)];
    cosmicElement.style.left = Math.random() * 100 + 'vw';
    cosmicElement.style.top = Math.random() * 100 + 'vh';
    cosmicElement.style.animationDelay = Math.random() * 20 + 's';
    document.body.appendChild(cosmicElement);

    // Remove after animation
    setTimeout(() => {
        cosmicElement.remove();
    }, 20000);
}

document.addEventListener('DOMContentLoaded', function() {

    setInterval(createParticle, 300); // Every 300ms

    
    setInterval(createCosmicElement, 5000); // Every 5 seconds

    
    for (let i = 0; i < 5; i++) {
        setTimeout(createCosmicElement, i * 1000);
    }
});
