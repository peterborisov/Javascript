function solve() {
   let courseBody1 = document.getElementsByClassName('courseBody')[0].getElementsByTagName("li");
   let courseBody2 = document.getElementsByClassName('courseBody')[1].getElementsByTagName('ul');
   for (el of courseBody1) {
      let toAppend = el.children;
      toAppend[0].addEventListener('click', () => {
         if (toAppend[0].checked === true) {
            var li = courseBody2.createElement('li');
            ul.appendChild(li);
            li.innerHTML += toAppend[1];
         }
      })
   }
   // console.log(courseBody1);
   // console.log(courseBody2);
   // let coures = {
   //    'JS Fundamentals': 170,
   //    'JS Advanced': 180,
   //    'JS Applications': 190,
   //    'JS Web': 490
   // }
}

solve();