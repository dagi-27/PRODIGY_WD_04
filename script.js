// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Handle video playback
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.portfolio-video video');
    
    videos.forEach(video => {
        // Pause all videos when leaving viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    video.pause();
                }
            });
        });
        
        observer.observe(video);
        
        // Add loading indicator
        video.addEventListener('loadstart', function() {
            this.parentElement.classList.add('loading');
        });
        
        video.addEventListener('canplay', function() {
            this.parentElement.classList.remove('loading');
        });
    });
});

// Enhanced filter functionality
const filterButtons = document.querySelectorAll('.filter-item');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
    });
});

// Add this to your script.js file
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "Frontend Developer",
    "Video Editor",
    "Web Developer"
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Add this function to handle language switching
function changeLanguage(lang) {
    const currentLangElement = document.querySelector('.current-lang');
    
    // Update the button text and store language preference
    currentLangElement.textContent = translations[lang].nav.language;
    localStorage.setItem('selectedLanguage', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const keys = element.getAttribute('data-translate').split('.');
        let translation = translations[lang];
        
        // Navigate through nested translation objects
        for (const key of keys) {
            if (translation && translation[key]) {
                translation = translation[key];
            } else {
                translation = null;
                break;
            }
        }

        // Update element content if translation exists
        if (translation) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update dynamic content like typing text
    if (translations[lang].typing && translations[lang].typing.roles) {
        textArray = translations[lang].typing.roles;
        textArrayIndex = 0;
        charIndex = 0;
        typedTextSpan.textContent = '';
        setTimeout(type, newTextDelay + 250);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference or default to English
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
});

// Update your translations object in translations.js to include all text content
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            portfolio: "Portfolio",
            education: "Education",
            certificates: "Certificates",
            language: "English"
        },
        hero: {
            greeting: "Hello! I Am",
            description: "Computer Science student at Jimma University, passionate about creating innovative solutions and collaborating on challenging projects. I'm a dedicated learner, constantly seeking opportunities to expand my knowledge and skills in the ever-evolving field of computer science. I'm excited to contribute my expertise to a team and make a meaningful impact."
        },
        education: {
            title: "Educational Journey",
            university: {
                name: "Jimma University",
                period: "2022 - Present",
                location: "Location: Jimma",
                role: "3rd Year Computer Science Student"
            },
            highSchool: {
                name: "Dil Ber Secondary School",
                period: "Grade 9-12",
                location: "Location: Addis Ababa, Gullele Werda 7"
            },
            elementary: {
                name: "Belay Zeleke School",
                period: "Grade 1-8",
                location: "Location: Addis Ababa, Gullele Werda 7"
            },
            certificates: {
                title: "Academic Achievements & Certificates",
                download: "Download Academic Records"
            }
        },
        // ... add other sections
    },
    am: {
        nav: {
            home: "መነሻ",
            about: "ስለ እኔ",
            portfolio: "ፖርትፎሊዮ",
            education: "ትምህርት",
            certificates: "የምስክር ወረቀቶች",
            language: "አማርኛ"
        },
        hero: {
            greeting: "ሰላም! እኔ ነኝ",
            description: "በጅማ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ ተማሪ፣ አዳዲስ መፍትሄዎችን በመፍጠር እና በፈታኝ ፕሮጀክቶች ላይ በመተባበር ላይ ያተኮረ። በኮምፒውተር ሳይንስ መስክ እውቀቴን እና ክህሎቴን ለማስፋት ያለመታከት የሚሰራ ተማሪ ነኝ።"
        },
        education: {
            title: "የትምህርት ጉዞ",
            university: {
                name: "ጅማ ዩኒቨርሲቲ",
                period: "2022 - አሁን",
                location: "አድራሻ፡ ጅማ",
                role: "3ኛ ዓመት የኮምፒውተር ሳይንስ ተማሪ"
            },
            // ... add other translations
        },
        // ... add other sections
    },
    or: {
        nav: {
            home: "Mana",
            about: "Waa'ee Koo",
            portfolio: "Poortfoliyo",
            education: "Barumsa",
            certificates: "Ragaalee",
            language: "Afaan Oromoo"
        },
        hero: {
            greeting: "Akkam! Ana",
            description: "Barataa Saayinsii Kompiyuuterii Yuuniversiitii Jimmaa, furmaata haaraa uumuurratti gammachuu qaba, projektii cimaa irratti hojjechuun nan jaalladha."
        },
        education: {
            title: "Adeemsa Barnootaa",
            university: {
                name: "Yuuniversiitii Jimmaa",
                period: "2022 - Ammayyuu",
                location: "Iddoo: Jimma",
                role: "Barataa Saayinsii Kompiyuuterii Waggaa 3ffaa"
            },
            // ... add other translations
        },
        // ... add other sections
    }
};