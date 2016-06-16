var data = [
    {Date: "1/6/2015", Region: "East", Rep: "Jones", Item: "Pencil", Units: 95.00, Cost: 1.99, Total: 189.05},
    {Date: "1/23/2015", Region: "Central", Rep: "Kivell", Item: "Binder", Units: 50.00, Cost: 19.99, Total: 999.50},
    {Date: "2/9/2015", Region: "Central", Rep: "Jardine", Item: "Pencil", Units: 36.00, Cost: 4.99, Total: 179.64},
    {Date: "2/26/2015", Region: "Central", Rep: "Gill", Item: "Pen", Units: 27.00, Cost: 19.99, Total: 539.73},
    {Date: "3/15/2015", Region: "West", Rep: "Sorvino", Item: "Pencil", Units: 56.00, Cost: 2.99, Total: 167.44},
    {Date: "4/1/2015", Region: "East", Rep: "Jones", Item: "Binder", Units: 60.00, Cost: 4.99, Total: 299.40},
    {Date: "4/18/2015", Region: "Central", Rep: "Andrews", Item: "Pencil", Units: 75.00, Cost: 1.99, Total: 149.25},
    {Date: "5/5/2015", Region: "Central", Rep: "Jardine", Item: "Pencil", Units: 90.00, Cost: 4.99, Total: 449.10},
    {Date: "5/22/2015", Region: "West", Rep: "Thompson", Item: "Pencil", Units: 32.00, Cost: 1.99, Total: 63.68},
    {Date: "6/8/2015", Region: "East", Rep: "Jones", Item: "Binder", Units: 60.00, Cost: 8.99, Total: 539.40},
    {Date: "6/25/2015", Region: "Central", Rep: "Morgan", Item: "Pencil", Units: 90.00, Cost: 4.99, Total: 449.10},
    {Date: "7/12/2015", Region: "East", Rep: "Howard", Item: "Binder", Units: 29.00, Cost: 1.99, Total: 57.71},
    {Date: "7/29/2015", Region: "East", Rep: "Parent", Item: "Binder", Units: 81.00, Cost: 19.99, Total: 619.19},
    {Date: "8/15/2015", Region: "East", Rep: "Jones", Item: "Pencil", Units: 35.00, Cost: 4.99, Total: 174.65},
    {Date: "9/1/2015", Region: "Central", Rep: "Smith", Item: "Desk", Units: 2.00, Cost: 125.00, Total: 250.00},
    {Date: "9/18/2015", Region: "East", Rep: "Jones", Item: "Pen Set", Units: 16.00, Cost: 15.99, Total: 255.84},
    {Date: "10/5/2015", Region: "Central", Rep: "Morgan", Item: "Binder", Units: 28.00, Cost: 8.99, Total: 251.72},
    {Date: "10/22/2015", Region: "East", Rep: "Jones", Item: "Pen", Units: 64.00, Cost: 8.99, Total: 575.36},
    {Date: "11/8/2015", Region: "East", Rep: "Parent", Item: "Pen", Units: 15.00, Cost: 19.99, Total: 299.85},
    {Date: "11/25/2015", Region: "Central", Rep: "Kivell", Item: "Pen Set", Units: 96.00, Cost: 4.99, Total: 479.04},
    {Date: "12/12/2015", Region: "Central", Rep: "Smith", Item: "Pencil", Units: 67.00, Cost: 1.29, Total: 86.43},
    {Date: "12/29/2015", Region: "East", Rep: "Parent", Item: "Pen Set", Units: 74.00, Cost: 15.99, Total: 183.26},
    {Date: "1/15/2016", Region: "Central", Rep: "Gill", Item: "Binder", Units: 46.00, Cost: 8.99, Total: 413.54},
    {Date: "2/1/2016", Region: "Central", Rep: "Smith", Item: "Binder", Units: 87.00, Cost: 15.00, Total: 305.00},
    {Date: "2/18/2016", Region: "East", Rep: "Jones", Item: "Binder", Units: 4.00, Cost: 4.99, Total: 19.96},
    {Date: "3/7/2016", Region: "West", Rep: "Sorvino", Item: "Binder", Units: 7.00, Cost: 19.99, Total: 139.93},
    {Date: "3/24/2016", Region: "Central", Rep: "Jardine", Item: "Pen Set", Units: 50.00, Cost: 4.99, Total: 249.50},
    {Date: "4/10/2016", Region: "Central", Rep: "Andrews", Item: "Pencil", Units: 66.00, Cost: 1.99, Total: 131.34},
    {Date: "4/27/2016", Region: "East", Rep: "Howard", Item: "Pen", Units: 96.00, Cost: 4.99, Total: 479.04},
    {Date: "5/14/2016", Region: "Central", Rep: "Gill", Item: "Pencil", Units: 53.00, Cost: 1.29, Total: 68.37},
    {Date: "5/31/2016", Region: "Central", Rep: "Gill", Item: "Binder", Units: 80.00, Cost: 8.99, Total: 719.20},
    {Date: "6/17/2016", Region: "Central", Rep: "Kivell", Item: "Desk", Units: 5.00, Cost: 125.00, Total: 625.00},
    {Date: "7/4/2016", Region: "East", Rep: "Jones", Item: "Pen Set", Units: 62.00, Cost: 4.99, Total: 309.38},
    {Date: "7/21/2016", Region: "Central", Rep: "Morgan", Item: "Pen Set", Units: 55.00, Cost: 12.49, Total: 686.95},
    {Date: "8/7/2016", Region: "Central", Rep: "Kivell", Item: "Pen Set", Units: 42.00, Cost: 23.95, Total: 1005.90},
    {Date: "8/24/2016", Region: "West", Rep: "Sorvino", Item: "Desk", Units: 3.00, Cost: 275.00, Total: 825.00},
    {Date: "9/10/2016", Region: "Central", Rep: "Gill", Item: "Pencil", Units: 7.00, Cost: 1.29, Total: 9.03},
    {Date: "9/27/2016", Region: "West", Rep: "Sorvino", Item: "Pen", Units: 76.00, Cost: 1.99, Total: 151.24},
    {Date: "10/14/2016", Region: "West", Rep: "Thompson", Item: "Binder", Units: 57.00, Cost: 19.99, Total: 139.43},
    {Date: "10/31/2016", Region: "Central", Rep: "Andrews", Item: "Pencil", Units: 14.00, Cost: 1.29, Total: 18.06},
    {Date: "11/17/2016", Region: "Central", Rep: "Jardine", Item: "Binder", Units: 11.00, Cost: 4.99, Total: 54.89},
    {Date: "12/4/2016", Region: "Central", Rep: "Jardine", Item: "Binder", Units: 94.00, Cost: 19.99, Total: 879.06},
    {Date: "12/21/2016", Region: "Central", Rep: "Andrews", Item: "Binder", Units: 28.00, Cost: 4.99, Total: 139.72}
];
var config = {
    rows: [
        "Region"
    ],
    columns: [
        "Item"
    ],
    values:[
     {name: "Total",measures: "Sum"}
    ]
};
var config1 = {
    rows: [
        "Region",
        "Rep"
    ],
    columns: [
        "Item",
        "Date"
    ],
    values:[
        {name: "Total",measures: "Sum"}
    ]
};
var config2= {
    rows: [
        "Region",
        "Cost"
    ],
    columns: [
        "Rep",
        "Item",
        "Units",
        "Date"
    ],
    values:[
        {name: "Total",measures: "Sum"}
    ]
};
var config3 = {
    rows: [
        "Region"
    ],
    columns: [
        "Rep",
        "Item",
        "Units"

    ],
    values:[
        {name: "Total",measures: "Sum"}
    ]
};

new pivotTable(config, data,document.getElementById("pivot1"));
new pivotTable(config1, data,document.getElementById("pivot2"));
new pivotTable(config3, data,document.getElementById("pivot4"));
 new pivotTable(config2, data,document.getElementById("pivot3"));

