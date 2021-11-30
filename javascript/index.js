function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

button_generate = document.getElementById("button_generate");
button_generate.addEventListener('click', function() {
  columns = document.getElementById("columns");
  students =  document.getElementById("students");

  seat = [];
  for (var i = 0; i < students.value; i++) {
    seat[i] = i + 1;
  }

  seat = shuffle(seat);

  grid_seats = document.getElementById("seats-table");
  grid_seats.innerHTML = '';
  grid_seats.style.setProperty('grid-template-columns', `repeat(${columns.value}, auto)`);
  for (var i = 0; i < students.value; i++) {
    grid_seats.innerHTML +='<div>' + seat[i] + '</div>';
  }	
});

