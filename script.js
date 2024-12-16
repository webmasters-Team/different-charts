// Chart 1
(function () {
    var chart = c3.generate({
      bindto: "#chart1",
      data: {
        columns: [
          ["data1", 31, 200, 100, 420, 150, 250],
          ["data2", 130, 100, 140, 200, 150, 40]
        ],
        type: "bar"
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
      }
    });
    setTimeout(function () {
      chart.load({
        columns: [["data3", 130, 150, 200, 300, 200, 100, 300]]
      });
    }, 1000);
  })();
  
  // Chart 2
  (function () {
    var chart = c3.generate({
      bindto: "#chart2",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25]
        ],
        axes: {
          data2: "y2" // ADD
        }
      },
      axis: {
        y2: {
          show: true // ADD
        }
      }
    });
  })();
  
  // Chart 3
  (function () {
    var chart = c3.generate({
      bindto: "#chart3",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25]
        ],
        axes: {
          data2: "y2"
        },
        types: {
          data2: "bar"
        }
      },
      axis: {
        y: {
          label: {
            text: "Y Label",
            position: "outer-middle"
          },
          tick: {
            format: d3.format("$,") // ADD
          }
        },
        y2: {
          show: true,
          label: {
            text: "Y2 Label",
            position: "outer-middle"
          }
        }
      }
    });
  })();
  
  // Chart 4
  (function () {
    var chart = c3.generate({
      bindto: "#chart4",
      data: {
        columns: [
          ["data1", 30, 20, 50, 40, 60, 50],
          ["data2", 200, 130, 90, 240, 130, 220],
          ["data3", 300, 200, 160, 400, 250, 250],
          ["data4", 200, 130, 90, 240, 130, 220],
          ["data5", 130, 120, 150, 140, 160, 150],
          ["data6", 90, 70, 20, 50, 60, 120]
        ],
        type: "bar",
        types: {
          data3: "spline",
          data4: "line",
          data6: "area"
        },
        groups: [["data1", "data2"]]
      }
    });
  })();
  