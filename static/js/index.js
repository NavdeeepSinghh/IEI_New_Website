document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing effect
    const typingElement = document.querySelector('.typing');
    const text = "Welcome to TEAM ORION!";
    let index = 0;
    const texts = ["Welcome to Our Society", "Engaging with Passion, Driving Change."];
    let count = 0;

    let currentText = "";
    let letter = "";
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const newTextDelay = 2000;
    function type() {
        if (index < texts[count].length) {
            letter = texts[count].charAt(index);
            currentText += letter;
            document.querySelector('.typing').textContent = currentText;
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    function erase() {
        if (index > 0) {
            currentText = currentText.substring(0, currentText.length - 1);
            document.querySelector('.typing').textContent = currentText;
            index--;
            setTimeout(erase, erasingSpeed);
        } else {
            count = (count + 1) % texts.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }
    type();

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});
