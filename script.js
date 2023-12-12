function grayscaleMouseOver() {
    document.querySelector('.sliderC').style.filter = 'grayscale(0%)';
}

function grayscaleMouseOut() {
    document.querySelector('.sliderC').style.filter = 'grayscale(100%)';
}

document.addEventListener("DOMContentLoaded", function() {
    // Gerçek içerik yüklendikten sonra loader'ı gizle
    document.querySelector(".loaderC").style.display = "none";
  });
  
