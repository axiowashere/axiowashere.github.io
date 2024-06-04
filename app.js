const initSlider = () => {
    const imageList = document.querySelector(".wrapper");
    const slideButtons = document.querySelectorAll(".slidebutton");
    const maxScrollLeft = imageList.scrollWidth/3;
    
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "leftbutton" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

document.getElementById("button1").addEventListener("click", function() {
    window.open("https://www.amazon.ca/Seven-Fallen-Feathers-Racism-Northern/dp/1487002262/ref=sr_1_1?crid=25Z1OPP5RXYCZ&dib=eyJ2IjoiMSJ9.zhhtJRLNT_pOyaGpiRn6wCHoy9CLEGmpu8BT_He8FxFptAaCNFPa-OsWPcw9wNCeCyOGwdSy4YJ0lcQxCGj-LTnLaswAvvJHt0jk0Jsy2YXFHsx5ciKkH0WrJKiiu1h36zzg4CFnCDEWjWC7_qC7fHcidXKVgAPn_ZQ6KXudMtYkGPelQcAGsxQLf7qoVdG_H4Vadg4fYBcc9u-ONCsVwBVzDvbfrNVzeq61HPSBiGNDnHSdV9DGs1Ab6mB7vu6Hmwt95PIOrG6QNKoEMiHOzpEPBUc3db7mysLzZFGKMDg.wiX2F98Jq84uLhd6Uxfghx42z-iy8bXux337idaK6GA&dib_tag=se&keywords=seven+fallen+feathers&qid=1717287726&sprefix=seven+fallen%2Caps%2C97&sr=8-1", "_blank");
});

document.getElementById("button2").addEventListener("click", function() {
    window.open("https://www.indigo.ca/en-ca/seven-fallen-feathers-racism-death-and-hard-truths-in-a-northern-city/9781487002268.html", "_blank");
});

document.getElementById("button3").addEventListener("click", function() {
    window.open("https://www.barnesandnoble.com/w/seven-fallen-feathers-tanya-talaga/1125674836?ean=9781487002268", "_blank");
});