
      document.addEventListener("DOMContentLoaded", () => {
        const rows = document.querySelectorAll(".logo-row");
      
        rows.forEach((row, index) => {
          setTimeout(() => {
            row.style.opacity = "1";
            row.style.transform = "translateY(0)";
          }, index * 500); // Delay each row animation by 500ms
        });
      });
     
      


        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                        } else {
                            entry.target.classList.remove('active');
                        }
                    });
                },
                {
                    threshold: 0.2,
                }
            );

            const animatedElements = document.querySelectorAll('.animate');
            animatedElements.forEach((el) => observer.observe(el));

        });
    

    
        const swiper = new Swiper('.swiper-container', {
            loop: true, // Enable looping
            autoplay: {
                delay: 3000, // Slide every 3 seconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        
        
          