const url3 = "https:5000//127.0.0.1/graph/product";

d3.json(url3).then(function(json) {

    console.log(json);

    var products = [];
    var num_prod = [];

    json.forEach(function(data) {
        products.push(data.product_name);
        num_prod.push(data.Total_product);
    });

    console.log(products)

    var x = products
    var y = num_prod
    console.log(x)
    console.log(y)

    // Create the Trace
    var trace1 = {
        x: x,
        y: y,
        type: "bar",
    };
    // Create the data array for the plot
    var data1 = [trace1];

    // Define the plot layout
    var layout = {
        title: "Top 10 best sellers",
        height: 600,
        width: 400,
        xaxis: {
            title: "products",
        },
        yaxis: {
            title: "orders",
            type: 'integer'
        }
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar1", data1, layout);

});