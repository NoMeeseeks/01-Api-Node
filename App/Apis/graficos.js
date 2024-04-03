//grafico 2
const barrasG = document.getElementById('barras');
new Chart(barrasG,{
    type: 'bar',
    data:  {
        labels: ['Mountain Bike Socks,M',	   
        'Road-550-W Yellow,40 ',
        'HL Mountain Pedal',	      
        'HL Mountain Pedal',	      ],
        datasets: [{
          label: 'Rating',
          data: [5,5,4,2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 2
        }],
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },  
    }});
