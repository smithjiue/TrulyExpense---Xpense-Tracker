



const backgroundColor = [
    "rgba(255, 99, 132, 0.7)",
    "rgba(54, 162, 235, 0.7)",
    "rgba(255, 206, 86, 0.7)",
    "rgba(75, 192, 192, 0.7)",
    "rgba(153, 102, 255, 0.7)",
    "rgba(255, 159, 64, 0.7)",
    "rgba(255, 0, 0, 0.7)",
    "rgba(0, 255, 0, 0.7)",
    "rgba(0, 0, 255, 0.7)",
    "rgba(255, 0, 255, 0.7)",
    "rgba(0, 255, 255, 0.7)",
    "rgba(128, 128, 128, 0.7)",
    "rgba(255, 128, 0, 0.7)",
    "rgba(0, 128, 255, 0.7)",
    "rgba(128, 0, 255, 0.7)",
    "rgba(255, 0, 128, 0.7)",
  ]
  
  const borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ]
  
  
  const renderChartBar = (data, labels, month) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    let mon = true
    if(month == 1000000000)
        mon = true
    else
      mon = false
    
    // ctx.clearRect(0, 0, 400, 400);
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: (mon?"Lifetime Income":`Last ${month} Months Income`),
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
  
          }]
        }
      }
    })
  };
  
  const renderChartPie = (data, labels, month, dia) => {
    var ctx = document.getElementById("myChart").getContext("2d")
    let mon = true
    if(month == 1000000000)
        mon = true
    else
      mon = false
    
    // ctx.clearRect(0, 0, ctx.width, ctx.height);
    var myChart = new Chart(ctx, {
      type: dia,
      data: {
        labels: labels,
        datasets: [
          {
            label: (mon?"Lifetime Income":`Last ${month} Months income`),
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "income per category",
        },
      },
    });
  };
  
  
  // const getChartData = () => {
  //   console.log("fetching");
  
  //   let url = "/expense_category_summary/1"
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((results) => {
  //       console.log("results", results);
  //       const category_data = results.expense_category_data;
  //       const [labels, data] = [
  //         Object.keys(category_data),
  //         Object.values(category_data),
  //       ];
  
  //       renderChartPie(data, labels, 1, "pie");
  //     });
  // };
  
  document.onload = getLocalStorage();
  document.onload = handleSelectChange();
  
  function getLocalStorage(){
    document.getElementById("pastIncomeData").value = localStorage.getItem("periodIncome");
    document.getElementById("diagram").value = localStorage.getItem("diagramIncome");
  }
  
  function handleSelectChange() {
    let selectedOption = document.getElementById("pastIncomeData").value;
  
    let selectedDiagramOption = document.getElementById("diagram").value;
    let opt = 1
    if (selectedOption == "Last Month") {
      opt = 1
    } else if (selectedOption == "3 Months") {
      opt = 3
    }
    else if (selectedOption == "6 Months") {
      opt = 6
  
    }
    else if (selectedOption == "1 Year") {
      opt = 12
  
    }
    else {
      opt = 1000000000
  
    }
  
  
    let url = "income_category_summary/" + opt
    fetch(url)
      .then((res) => res.json())
      .then((results) => {
        console.log("results", results);
        const source_data = results.income_category_data;
        const [labels, data] = [
          Object.keys(source_data),
          Object.values(source_data),
        ];
        if (selectedDiagramOption == "Bar") {
          renderChartBar(data, labels, opt)
        } else if (selectedDiagramOption == "Pie") {
  
          renderChartPie(data, labels, opt, "pie");
        }
        else {
  
          renderChartPie(data, labels, opt, "doughnut");
        }
        localStorage.setItem("periodIncome",selectedOption)
        localStorage.setItem("diagramIncome",selectedDiagramOption)
      });
  }
  
    // function handleDiagramChange() {
    //   let selectedOption = document.getElementById("pastExpenseData");
    //   let selectedDiagramOption = document.getElementById("diagram");
    //   let opt = 1
    //   if (selectedOption == "Last Month") {
    //     opt = 1
    //   } else if (selectedOption == "3 Months") {
    //     opt = 3
    //   }
    //   else if (selectedOption == "6 Months") {
    //     opt = 6
  
    //   }
    //   else if (selectedOption == "1 Year") {
    //     opt = 12
  
    //   }
    //   else {
    //     opt = 1000000000
  
    //   }
  
  
    //   let url = "/expense_category_summary/" + opt
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((results) => {
    //       console.log("results", results);
    //       const category_data = results.expense_category_data;
    //       const [labels, data] = [
    //         Object.keys(category_data),
    //         Object.values(category_data),
    //       ];
    //       if (selectedDiagramOption == "Bar") {
    //         renderChartBar(data, labels, opt)
    //       } else if (selectedDiagramOption == "Pie") {
  
    //         renderChartPie(data, labels, opt, "pie");
    //       }
    //       else {
  
    //         renderChartPie(data, labels, opt, "doughnut");
    //       }
    //     });
    // }
  