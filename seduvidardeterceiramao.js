document.addEventListener("DOMContentLoaded", () => {
    const cookieModal = document.getElementById("cookieModal");
    const acceptButton = document.getElementById("acceptCookies");
    const rejectButton = document.getElementById("rejectCookies");
    const jumpscare = document.getElementById("jumpscare");
    const jumpscareVideo = document.getElementById("jumpscareVideo");

   
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieModal.style.display = "flex";
    }

    
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieModal.style.display = "none";
        showJumpscare();
    });

    
    rejectButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "false");
        cookieModal.style.display = "none";
        alert("Você recusou os cookies!");
    });

   
    function showJumpscare() {
        jumpscare.style.display = "flex";
        jumpscareVideo.play();

        
        setTimeout(() => {
            jumpscare.style.display = "none";
        }, 5000);
    }
});
