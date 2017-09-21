//DEFINING THE TEMPLATE
var users = [
  {Date: '06/07/2017', Opponent: 'N. Djokovic', Rating: '3', Racket: 'Pro Series 5'},
  {Date: '19/08/2017', Opponent: 'R. Baja', Rating: '243', Racket: 'Pro Series 3'},
  {Date: '26/08/2017', Opponent: 'A. Murray', Rating: '4', Racket: 'Mac Series 5'},
  {Date: '16/09/2017', Opponent: 'J. Doe', Rating: '26', Racket: 'Fiesta Grater'},
  {Date: '06/10/2017', Opponent: 'P. Anderson', Rating: '456', Racket: 'Logger'},
  {Date: '23/10/2017', Opponent: 'Y. Chartist', Rating: '35', Racket: 'Pro Series 5'}
];

var series = [
  {Play: 25, Miss: 11, Late:22},
];

var templates = [
  { id: 1, name: 'Dark', value: 'css/black.css'},
  { id: 2, name: 'Light', value: 'css/white.css'}
];


var app = new Vue({
  el: '#app',
  data: {
    title: "Precompiled Technologies Exercise",
    users: users,
    victory: 14,
    tiebreaks: 78,
    series: series,
    templates: templates,
    current_template: templates[0]
  },
  methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
    
    //THE TABLES
    tableHeader: function(tableData) {
      var keys = [];
      for(key in tableData[0]){
        keys.push(key);
      }
      return keys;
    },
    
    //THE CHARTS
    statistics: function(stats) {
      return [this.tiebreaks, this.victory]
    },
 
    //ADD ROW
    addRow: function(rows, value) {
      rows.push({
        Date: '14/11/2017',
        Opponent: 'N. Djokovic',
        Rating: '2',
        Racket: 'Pro Series 5'
      });
      return;
    },
    removeElement: function(rows, value) {
        rows.splice(value, 1);
    },
    
    //UPDATE COUNT
    updateVictory: function() {
      this.victory += 1;
    },
    updateTieBreaks: function() {
      this.tiebreaks += 1;
    },
  }
})


//THE CHARTS
new Chartist.Pie('#chart1', {
  series: app.statistics()
});


//MEDIA QUERIES (MENU)
const mq = window.matchMedia( "(min-width: 800px)" );


//OPEN/CLOSE THE MENU
function openNav() {  
  if (mq.matches) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openicon").style.display = "none";
    document.getElementById("chart1").style.width = "135%";
    document.getElementById("chart2").style.width = "135%";
    document.getElementById("chart3").style.width = "135%";
  } else {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
    document.getElementById("openicon").style.display = "none";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("openicon").style.display = "block";
  document.getElementById("chart1").style.width = "100%";
  document.getElementById("chart2").style.width = "100%";
  document.getElementById("chart3").style.width = "100%";
}