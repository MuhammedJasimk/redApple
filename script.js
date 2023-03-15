
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 12, 12, 7],
            backgroundColor: [

                "#A180D7",
                "#9AA0F5",
                "#676BBE",
                "#C3C3E6",
                "#B95BD9",
            ],
            borderWidth: 1,
            cutout: '90%',
            borderRadius: 30,
            offset: 10

        }]
    },
    options: {
        responsive: true,
        plugins: {
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    },
    centerText: {
        display: true,
        text: "280"
    }
});



// const rev = document.getElementById('revanue').getContext('2d');

const colors = {
    purple: {
        default: "rgba(217, 217, 253, 10)",
        half: "rgba(217, 217, 253, 0.5)",
        quarter: "rgba(217, 217, 253, 0.25)",
        zero: "rgba(217, 217, 253, 0)"
    },
    indigo: {
        default: "rgba(80, 102, 120, 1)",
        quarter: "rgba(80, 102, 120, 0.25)"
    }
};

const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

const labels = [
    "Jan",
    "Jan",
    "Jan",
    "Jan",
    "Jan",
    "Jan",
    "Jan",
    "Jan",
    "Jan",
    "Jan",


];

const rev = document.getElementById("revanue").getContext("2d");
rev.canvas.height = 100;

gradient = rev.createLinearGradient(180, 0, 215, 215);
gradient.addColorStop(0, colors.purple.half);
gradient.addColorStop(0.35, colors.purple.quarter);
gradient.addColorStop(1, colors.purple.zero);

const options = {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: colors.purple.default,
                borderColor: colors.purple.default,
                data: weight,
                lineTension: 0.2,
                borderWidth: 2,
                pointRadius: 3
            }
        ]
    },
    options: {

        layout: {
            padding: 10
        },
        responsive: true,
        legend: {
            display: false
        },

        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        padding: 10,
                        autoSkip: false,
                        maxRotation: 15,
                        minRotation: 15
                    }
                }
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Weight in KG",
                        padding: 10
                    },
                    gridLines: {
                        display: true,
                        color: colors.indigo.quarter
                    },
                    ticks: {
                        beginAtZero: false,
                        max: 63,
                        min: 57,
                        padding: 10
                    }
                }
            ]
        }
    }
};

window.onload = function () {
    window.myLine = new Chart(rev, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
};






// const exp = document.getElementById('expense');

var exp = document.getElementById('expense').getContext('2d');

var purple_orange_gradient = exp.createLinearGradient(0, 0, 0, 600);
purple_orange_gradient.addColorStop(0, '#d9d9fc');
purple_orange_gradient.addColorStop(0.35, 'white');
purple_orange_gradient.addColorStop(1, 'white');

var bar_chart = new Chart(exp, {
    type: 'bar',
    data: {
        labels: ["6", "7", "8", "9", "10", "11"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 8, 14, 5],
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: purple_orange_gradient,
            hoverBorderWidth: 2,
            hoverBorderColor: 'purple'
        }],
        borderWidth: 1,
        cutout: '90%',
        borderRadius: 30,
        offset: 10
    },
    options: {
        responsive: true,
        plugins: {
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    },
    centerText: {
        display: true,
        text: "280"
    }
});