var myLink = document.querySelector("#ar-link");
if(myLink.relList.supports("ar")) {
    myLink.computedStyleMap.display = "block";
} else {
    myLink.style.display = "none";
}

// document.getElementById('view3d').addEventListener('click', function() {
//     window.location.href = 'images/Bicycle.usdz';
// });
