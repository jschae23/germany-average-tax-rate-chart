const incomeChartLabels = [
    "0", "5000", "10000", "15000", "20000", "25000", "30000",
    "35000", "40000", "45000", "50000", "55000", "60000",
    "65000", "70000", "75000", "80000", "85000", "90000",
    "95000", "100000"
];

const incomeChartData = [
    {
        label: 'Germany',
        data: [
            0.00,
            0.00,
            0.00,
            2.90,
            7.85,
            11.40,
            14.06,
            16.20,
            18.02,
            19.64,
            21.10,
            22.45,
            23.72,
            24.93,
            26.09,
            27.21,
            28.30,
            29.36,
            30.41,
            31.43,
            32.12
        ],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.1
    },
    {
        label: 'Bulgaria (10%)',
        data: incomeChartLabels.map(() => 10),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderDash: [5, 5],
        tension: 0.1
    },
    {
        label: 'Romania (10%)',
        data: incomeChartLabels.map(() => 10),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        borderDash: [5, 5],
        tension: 0.1
    },
    {
        label: 'Hungary (15%)',
        data: incomeChartLabels.map(() => 15),
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.1)',
        borderDash: [5, 5],
        tension: 0.1
    },
    {
        label: 'Lithuania (20%)',
        data: incomeChartLabels.map(() => 20),
        borderColor: 'rgb(201, 203, 207)',
        backgroundColor: 'rgba(201, 203, 207, 0.1)',
        borderDash: [5, 5],
        tension: 0.1
    },
    {
        label: 'Estonia (24%)',
        data: incomeChartLabels.map(() => 24),
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        borderDash: [5, 5],
        tension: 0.1
    }
];