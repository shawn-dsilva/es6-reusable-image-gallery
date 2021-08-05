class ImageGallery {
  constructor(id) {

    this.container = document.getElementById(id);
    this.prevButton = this.container.querySelector(".prev");
    this.nextButton = this.container.querySelector(".next");
    this.slideIndex = 1;
    var that = this;

    this.showSlide(this.slideIndex);

    this.prevButton.addEventListener("click", function () {
      that.advanceSlide(-1);
    });
    this.nextButton.addEventListener("click", function () {
      that.advanceSlide(1);
    });
  }

  advanceSlide = function (n) {
    this.showSlide((this.slideIndex += n));
  };

  showSlide = function (n) {
    var slide = this.container.getElementsByClassName("imageSlide");
    if (n > slide.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slide.length;
    }
    for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    slide[this.slideIndex - 1].style.display = "block";
  };

  static toggleFullscreenImage(imagename = null) {
    var fullscreenDisplayDiv = document.getElementById("fullscreen-display");
    var img = fullscreenDisplayDiv.getElementsByTagName("img");
    var close = fullscreenDisplayDiv.getElementsByTagName("i");
    if(imagename != null) {
        img[0].setAttribute("src", imagename );
        close[0].style.display = "block";
        fullscreenDisplayDiv.className = "fullscreen-display-show";
        window.document.body.style.overflow = "hidden";
    } else {
        img[0].setAttribute("src", " ");
        close[0].style.display = "none";
        fullscreenDisplayDiv.className = "fullscreen-display-hide";
        window.document.body.style.overflow = "auto";
    }

  }

}

let first = new ImageGallery("first");
let second = new ImageGallery("second");