// set bk image - done if we want one
// document.body.style.backgroundImage = 'url(\'/images/safaris/23.jpg\')';

// show skeleton until pic is loaded then insert new image - working on this
/* function showSkeleton() {
  const demo = document.getElementById('demo');
  const img = document.createElement('img');
  img.src = '/images/bk.jpg';
  setTimeout(function() {
    demo.appendChild(img);
    // alert('Hello');
    // alert("Page is loaded");
  }, 3000);
}
 */

/* function random_imglink() {
  const myimages=new Array();
  // specify random images below. You can have as many as you wish
  myimages[1]='image1.gif';
  myimages[2]='image2.gif';
  myimages[3]='image3.gif';
  myimages[4]='image4.gif';
  myimages[5]='image5.gif';
  myimages[6]='image6.gif';

  // specify corresponding links below
  const imagelinks=new Array();
  imagelinks[1]='http://www.javascriptkit.com';
  imagelinks[2]='http://www.netscape.com';
  imagelinks[3]='http://www.microsoft.com';
  imagelinks[4]='http://www.dynamicdrive.com';
  imagelinks[5]='http://www.freewarejava.com';
  imagelinks[6]='http://www.cnn.com';

  let ry=Math.floor(Math.random()*myimages.length);
  if (ry==0) {
    ry=1;
  }
  document.write('<a href='+'"'+imagelinks[ry]+'"'+'><img src="'+myimages[ry]+'" border=0></a>');
}
random_imglink();
 */

// document.body.style.backgroundColor = "#f3f3f3";
// document.body.style.backgroundImage = 'url(\'/images/safaris/23.jpg\')';


let lastIndex = 0;
function randomBKImageOnRefresh() {
  // const theImage = document.getElementById('randomImage');
  const body = document.getElementsByTagName('body')[0];
  const imgDir = '/images/safaris/';
  const imgArray = ['2.jpg', '3.jpg', '4.jpg', '6.jpg', '4.jpg', '54.jpg', '67.jpg', '76.jpg', '97.jpg', '80.jpg', '188.jpg', '183.jpg', '170.jpg', '9.jpg', '16.jpg', '31.jpg', '11.jpg', '14.jpg', '25.jpg'];
  let imgIndex = 0;

  if (imgArray.length > 1) {
    while (imgIndex == lastIndex) {
      imgIndex = Math.floor(Math.random() * imgArray.length);
    }
    lastIndex = imgIndex;

    const imgPath = imgDir + imgArray[imgIndex];

    body.src = imgPath;
    body.alt = imgArray[imgIndex];
    document.body.style.backgroundImage = 'url(' + imgPath + ')';
  } else {
    return false;
  }
}

// generates random image from folder array
// eg = img#randomSpotLightImage(alt='image' width="500px")
/* let lastIndex2 = 0;
function randomSpotLightImagOnRefresh() {
  const theImage2 = document.getElementById('spotLightImage');
  const imgDir2 = '/images/safaris/';
  const imgArray2 = ['2.jpg', '3.jpg', '4.jpg'];
  let imgIndex2 = 0;

  if (imgArray2.length > 1) {
    while (imgIndex2 == lastIndex2) {
      imgIndex2 = Math.floor(Math.random() * imgArray2.length);
    }
    lastIndex2 = imgIndex2;

    const imgPath2 = imgDir2 + imgArray2[imgIndex2];

    theImage2.src = imgPath2;
    theImage2.alt = imgArray2[imgIndex2];
  } else {
    return false;
  }
}
randomSpotLightImagOnRefresh(); */


let myVar;
function getResults() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('myDiv').style.display = 'block';
}
getResults();
