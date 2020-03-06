function create(words) {
   for (el of words) {
      let content = document.getElementById('content'),
         innerDiv = document.createElement('div'),
         p = document.createElement('p');
      innerDiv.appendChild(p);
      content.appendChild(innerDiv);
      p.innerText = el;
   }
}