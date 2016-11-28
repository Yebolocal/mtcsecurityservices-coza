var servicesText1 = document.getElementById("sevices-text-1");
var servicesText2 = document.getElementById("sevices-text-2");
var servicesText3 = document.getElementById("sevices-text-3");
var servicesText4 = document.getElementById("sevices-text-4");

servicesText1.addEventListener("mouseenter", setFingerprint);
servicesText1.addEventListener("mouseleave", removeFingerprint);
servicesText2.addEventListener("mouseenter", setFingerprint);
servicesText2.addEventListener("mouseleave", removeFingerprint);
servicesText3.addEventListener("mouseenter", setFingerprint);
servicesText3.addEventListener("mouseleave", removeFingerprint);
servicesText4.addEventListener("mouseenter", setFingerprint);
servicesText4.addEventListener("mouseleave", removeFingerprint);

function setFingerprint() {
    document.getElementById("services-section").style.background = "url('/img/fingerpint.png') repeat-x center";
};

function removeFingerprint() {
    document.getElementById("services-section").style.background = "url('/img/services-back.jpg') white no-repeat center";
};
