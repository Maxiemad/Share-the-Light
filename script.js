// Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2000);
});

// Particles.js configuration
document.addEventListener('DOMContentLoaded', function() {
    // Handle video playback
    const heroVideo = document.querySelector('.hero-video');
    const videoFallback = document.querySelector('.video-fallback');
    const playBtn = document.getElementById('play-video-btn');
    
    if (heroVideo) {
        console.log('Video element found:', heroVideo);
        
        // Hide fallback when video loads successfully
        heroVideo.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully');
            if (videoFallback) {
                videoFallback.classList.add('hidden');
            }
            heroVideo.play().catch(e => console.log('Autoplay prevented:', e));
        });
        
        heroVideo.addEventListener('canplay', function() {
            console.log('Video can play');
            if (videoFallback) {
                videoFallback.classList.add('hidden');
            }
            heroVideo.play().catch(e => console.log('Play failed:', e));
        });
        
        heroVideo.addEventListener('playing', function() {
            console.log('Video is playing');
            if (videoFallback) {
                videoFallback.classList.add('hidden');
            }
        });
        
        heroVideo.addEventListener('error', function(e) {
            console.log('Video error:', e);
            console.log('Video src:', heroVideo.src);
            console.log('Video currentSrc:', heroVideo.currentSrc);
            // Keep fallback visible if video fails
            if (videoFallback) {
                videoFallback.classList.remove('hidden');
            }
        });
        
        // Play button functionality
        if (playBtn) {
            playBtn.addEventListener('click', function() {
                console.log('Play button clicked');
                heroVideo.muted = false;
                heroVideo.volume = 0.3;
                heroVideo.play().then(() => {
                    console.log('Video started playing');
                    if (videoFallback) {
                        videoFallback.classList.add('hidden');
                    }
                }).catch(e => {
                    console.log('Play failed:', e);
                });
            });
        }
        
        // Enable sound on first user interaction
        document.addEventListener('click', function() {
            if (heroVideo.muted) {
                heroVideo.muted = false;
                heroVideo.volume = 0.3;
                console.log('Sound enabled');
            }
        }, { once: true });
        
        // Try to play immediately
        setTimeout(() => {
            heroVideo.play().catch(e => {
                console.log('Initial play failed:', e);
                // Show fallback if autoplay fails
                if (videoFallback) {
                    videoFallback.classList.remove('hidden');
                }
            });
        }, 1000);
    }

    // Initialize particles.js for hero section
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#FFD700", "#FF8C00", "#FF4500"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false
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

        // Initialize particles for other sections
        const particlesConfig = {
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#FFD700", "#FF8C00", "#FF4500"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false
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
        };

        // Initialize particles for other sections
        particlesJS('particles-js-why', particlesConfig);
        particlesJS('particles-js-kits', particlesConfig);
        particlesJS('particles-js-impact', particlesConfig);
    }

    // Animated counters
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger counter animation when impact section comes into view
                if (entry.target.classList.contains('impact-section')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // Button click handlers
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.textContent.includes('Donate Now')) {
                document.getElementById('kits').scrollIntoView({ behavior: 'smooth' });
            } else if (this.textContent.includes('See Kits')) {
                document.getElementById('kits').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Kit donation buttons
    document.querySelectorAll('.kit-donate-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const kitCard = this.closest('.kit-card');
            const kitName = kitCard.querySelector('h3').textContent;
            const kitPrice = kitCard.querySelector('.kit-price').textContent;
            
            // Create donation modal or redirect
            showDonationModal(kitName, kitPrice);
        });
    });

    // Volunteer button
    document.querySelector('.volunteer-btn').addEventListener('click', function(e) {
        e.preventDefault();
        showVolunteerModal();
    });

    // Donation modal
    function showDonationModal(kitName, price) {
        const modal = document.createElement('div');
        modal.className = 'donation-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Donate ${kitName}</h3>
                <p>Amount: ${price}</p>
                <div class="payment-options">
                    <button class="payment-btn">UPI Payment</button>
                    <button class="payment-btn">Card Payment</button>
                    <button class="payment-btn">Net Banking</button>
                </div>
                <div class="qr-code-section">
                    <div class="qr-placeholder">
                        <i class="fas fa-qrcode"></i>
                        <p>Scan QR for UPI</p>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Volunteer modal
    function showVolunteerModal() {
        const modal = document.createElement('div');
        modal.className = 'volunteer-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Join Our Volunteer Team</h3>
                <form class="volunteer-form">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Email Address" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <select required>
                        <option value="">Select Interest</option>
                        <option value="distribution">Distribution</option>
                        <option value="fundraising">Fundraising</option>
                        <option value="social-media">Social Media</option>
                        <option value="coordination">Coordination</option>
                    </select>
                    <textarea placeholder="Tell us about yourself and why you want to volunteer" rows="4"></textarea>
                    <button type="submit" class="submit-btn">Submit Application</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Form submission
        modal.querySelector('.volunteer-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon.');
            modal.remove();
        });
    }

    // Add CSS for modals
    const modalStyles = `
        .donation-modal, .volunteer-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            padding: 40px;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            position: relative;
            animation: slideInUp 0.3s ease;
        }
        
        .close-modal {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 2rem;
            cursor: pointer;
            color: #800000;
        }
        
        .payment-options {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 20px 0;
        }
        
        .payment-btn {
            padding: 15px;
            border: 2px solid #FF8C00;
            background: transparent;
            color: #FF8C00;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .payment-btn:hover {
            background: #FF8C00;
            color: white;
        }
        
        .qr-code-section {
            text-align: center;
            margin-top: 20px;
        }
        
        .volunteer-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .volunteer-form input,
        .volunteer-form select,
        .volunteer-form textarea {
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
        }
        
        .volunteer-form input:focus,
        .volunteer-form select:focus,
        .volunteer-form textarea:focus {
            outline: none;
            border-color: #FF8C00;
        }
        
        .submit-btn {
            background: linear-gradient(45deg, #FF8C00, #FFD700);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 140, 0, 0.3);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Add hover sound effect (optional)
    document.querySelectorAll('.btn-primary, .btn-secondary, .kit-donate-btn, .volunteer-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            // You can add a subtle sound effect here if desired
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add floating animation to kit cards
    document.querySelectorAll('.kit-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('float-animation');
    });

    // Add floating animation CSS
    const floatAnimationCSS = `
        .float-animation {
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    
    const floatStyleSheet = document.createElement('style');
    floatStyleSheet.textContent = floatAnimationCSS;
    document.head.appendChild(floatStyleSheet);

    // Add glow effect to buttons on hover
    document.querySelectorAll('.btn-primary, .kit-donate-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 140, 0, 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Add scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
    document.querySelector('.hero-section').appendChild(scrollIndicator);

    const scrollIndicatorCSS = `
        .scroll-indicator {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 2rem;
            animation: bounce 2s infinite;
            cursor: pointer;
        }
        
        .scroll-indicator:hover {
            color: #FFD700;
        }
    `;
    
    const scrollIndicatorStyle = document.createElement('style');
    scrollIndicatorStyle.textContent = scrollIndicatorCSS;
    document.head.appendChild(scrollIndicatorStyle);

    // Scroll indicator click handler
    scrollIndicator.addEventListener('click', () => {
        document.getElementById('why-cause').scrollIntoView({ behavior: 'smooth' });
    });
});
