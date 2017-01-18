var images = [
    "http://files.leoneckert.com/itpgifs/ididntknow.gif",
    "http://files.leoneckert.com/itpgifs/backtowork.gif",
    "http://files.leoneckert.com/itpgifs/katiekiss.gif",
    "http://files.leoneckert.com/itpgifs/tiridance.gif",
    "http://files.leoneckert.com/itpgifs/melaspin.gif",
    "http://files.leoneckert.com/itpgifs/entertheshop.gif",
    "http://files.leoneckert.com/itpgifs/goodvibes.gif",
    "http://files.leoneckert.com/itpgifs/chinoapproves.gif",
    "http://files.leoneckert.com/itpgifs/corbinblast.gif",
    "http://files.leoneckert.com/itpgifs/highup.gif",
    "http://files.leoneckert.com/itpgifs/tiridrill.gif",
    "http://files.leoneckert.com/itpgifs/rushalishine.gif",
    "http://files.leoneckert.com/itpgifs/sebastiandance.gif",
    "http://files.leoneckert.com/itpgifs/mattwave.gif",
    "http://files.leoneckert.com/itpgifs/itsraining.gif",
    "http://files.leoneckert.com/itpgifs/doroturn.gif",
    "http://files.leoneckert.com/itpgifs/kojisleeps.gif"
];

window.onload = replaceImages;

function replaceImages() {
    for (var i in document.images) {
        var targetImage = document.images[i];
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var height = targetImage.height;
        var width = targetImage.width;

        targetImage.src = randomImage;
        targetImage.height = height;
        targetImage.width = width;
    }
}
