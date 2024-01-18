function isTouchScreen()
{
   return ("ontouchstart" in document.documentElement);
}

function setStyle(docId)
{
   console.log("setStyle");
   styleElem = document.getElementById(docId);
   if (isTouchScreen()) {
      styleElem.href = "css/mobile.css"
   } else {
      styleElem.href = "css/pc.css"
   }
}

function showOnPc(docId)
{
   if (isTouchScreen()) {
      elem = document.getElementById(docId);
      elem.setAttribute("hidden", "hidden");
   }
}

function showOnMobile(docId)
{
   if (!isTouchScreen()) {
      elem = document.getElementById(docId);
      elem.setAttribute("hidden", "hidden");
   }
}

function mediaText(docId)
{
   console.log("mediaText");
   let device = "PC?";
   if (isTouchScreen()) {
      device = "Mobile?";
   }
   document.getElementById(docId).innerHTML = device;
}

function setFrame(docId, htmlSrc)
{
   document.getElementById(docId).src = htmlSrc;
}

function setFrame2(docId, selectedPage)
{
   var htmlSrc = document.getElementById(selectedPage).value;
   document.getElementById(docId).src = htmlSrc;
}
