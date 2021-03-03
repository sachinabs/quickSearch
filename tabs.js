function mycall() {
  openGSearch();
}

function openGSearch() {
  let text = document.getElementById("search").value;
  if (text == "") {
    document.getElementById("inv").innerHTML = "Required field";
  } else {
    document.getElementById("inv").innerHTML = "";
    let searchList = [
      "https://www.google.com/search?q=",
      "https://duckduckgo.com/?q=",
      "https://www.bing.com/search?q=",
    ];

    for (var i = 0; i < searchList.length; i++) {
      chrome.tabs.create({ url: searchList[i] + text, selected: false });
    }
  }
}

// function call triggers:

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mybtn").addEventListener("click", mycall);
});

// for qr

function forQr() {
  let qrtext = document.getElementById("text").value;

  if (qrtext == "") {
    document.getElementById("invQr").innerHTML = "Required field";
  } else {
    document.getElementById("invQr").innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      correctLevel: QRCode.CorrectLevel.H,
    });

    function makeCode() {
      var elText = document.getElementById("text");

      if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
      }
      qrcode.makeCode(elText.value);

      
    }
  }
  
  makeCode();

  $("#text")
    .on("blur", function () {
      makeCode();
    })
    .on("keydown", function (e) {
      if (e.keyCode == 13) {
        makeCode();
      }
    });
}


// function call triggers:

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("qrBut").addEventListener("click", forQr);
});

function pageReload() {
  location.reload();
}

// function call triggers: , 
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("reset").addEventListener("click", pageReload);
});
