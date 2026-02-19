const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "coral";
  paragraphs[i].style.border = "solid black 3px";
  paragraphs[i].style.background = "cyan";
  paragraphs[i].style.marginTop = "200px";
  paragraphs[i].innerHTML = "Hello World!";
}
