var webGraph = document.getElementById("web");

var barChart = new Chart(webGraph, {
    type: 'bar',
    data: {
      labels: ["Фронтенд-разработчики", "Бэкенд-разработчики", "Full-stack разработчики"],
      datasets: [{
        label: 'Количество программистов',
        data: [4633, 3345, 964],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ]
      }]
    }
  });   

  var gameGraph = document.getElementById("game");

  var barChart = new Chart(gameGraph, {
      type: 'bar',
      data: {
        labels: ["Гейм-дизайнеры", "Программисты игрового движка", "Аниматоры", "Графические дизайнеры"],
        datasets: [{
          label: 'Количество программистов (игры)',
          data: [5495, 3546, 3125, 2946],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ]
        }]
      }
    }); 

    var mobileGraph = document.getElementById("mobile");

    var barChart = new Chart(mobileGraph, {
        type: 'bar',
        data: {
          labels: ["Разработчики iOS", "Разработчики Android", "Кроссплатформенные разработчики"],
          datasets: [{
            label: 'Количество программистов (мобильные)',
            data: [7490, 6248, 8321],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }]
        }
      }); 
    