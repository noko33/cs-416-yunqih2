
const btcData = [
    {year: 2010, month: 'July', close: 0.06},
    {year: 2010, month: 'August', close: 0.06},
    {year: 2010, month: 'September', close: 0.06},
    {year: 2010, month: 'October', close: 0.20},
    {year: 2010, month: 'November', close: 0.23},
    {year: 2010, month: 'December', close: 0.30},
    {year: 2011, month: 'January', close: 0.48},
    {year: 2011, month: 'February', close: 0.89},
    {year: 2011, month: 'March', close: 0.79},
    {year: 2011, month: 'April', close: 2.88},
    {year: 2011, month: 'May', close: 8.80},
    {year: 2011, month: 'June', close: 16.85},
    {year: 2011, month: 'July', close: 13.53},
    {year: 2011, month: 'August', close: 8.79},
    {year: 2011, month: 'September', close: 4.78},
    {year: 2011, month: 'October', close: 3.27},
    {year: 2011, month: 'November', close: 2.75},
    {year: 2011, month: 'December', close: 4.25},
    {year: 2012, month: 'January', close: 5.49},
    {year: 2012, month: 'February', close: 4.87},
    {year: 2012, month: 'March', close: 4.86},
    {year: 2012, month: 'April', close: 4.90},
    {year: 2012, month: 'May', close: 5.14},
    {year: 2012, month: 'June', close: 6.65},
    {year: 2012, month: 'July', close: 9.10},
    {year: 2012, month: 'August', close: 10.78},
    {year: 2012, month: 'September', close: 12.36},
    {year: 2012, month: 'October', close: 10.89},
    {year: 2012, month: 'November', close: 12.45},
    {year: 2012, month: 'December', close: 13.45},
    {year: 2013, month: 'January', close: 19.70},
    {year: 2013, month: 'February', close: 30.90},
    {year: 2013, month: 'March', close: 92.19},
    {year: 2013, month: 'April', close: 139.00},
    {year: 2013, month: 'May', close: 129.00},
    {year: 2013, month: 'June', close: 96.61},
    {year: 2013, month: 'July', close: 106.09},
    {year: 2013, month: 'August', close: 135.35},
    {year: 2013, month: 'September', close: 133.00},
    {year: 2013, month: 'October', close: 204.00},
    {year: 2013, month: 'November', close: 1129.43},
    {year: 2013, month: 'December', close: 754.01},
    {year: 2014, month: 'January', close: 829.92},
    {year: 2014, month: 'February', close: 549.26},
    {year: 2014, month: 'March', close: 457.00},
    {year: 2014, month: 'April', close: 447.65},
    {year: 2014, month: 'May', close: 623.68},
    {year: 2014, month: 'June', close: 639.80},
    {year: 2014, month: 'July', close: 586.24},
    {year: 2014, month: 'August', close: 477.76},
    {year: 2014, month: 'September', close: 386.94},
    {year: 2014, month: 'October', close: 338.32},
    {year: 2014, month: 'November', close: 378.05},
    {year: 2014, month: 'December', close: 320.19},
    {year: 2015, month: 'January', close: 217.46},
    {year: 2015, month: 'February', close: 254.26},
    {year: 2015, month: 'March', close: 244.22},
    {year: 2015, month: 'April', close: 236.15},
    {year: 2015, month: 'May', close: 230.19},
    {year: 2015, month: 'June', close: 263.07},
    {year: 2015, month: 'July', close: 284.65},
    {year: 2015, month: 'August', close: 230.06},
    {year: 2015, month: 'September', close: 236.06},
    {year: 2015, month: 'October', close: 314.17},
    {year: 2015, month: 'November', close: 377.32},
    {year: 2015, month: 'December', close: 430.57},
    {year: 2016, month: 'January', close: 368.77},
    {year: 2016, month: 'February', close: 437.70},
    {year: 2016, month: 'March', close: 416.73},
    {year: 2016, month: 'April', close: 448.32},
    {year: 2016, month: 'May', close: 531.39},
    {year: 2016, month: 'June', close: 673.34},
    {year: 2016, month: 'July', close: 624.68},
    {year: 2016, month: 'August', close: 575.47},
    {year: 2016, month: 'September', close: 609.74},
    {year: 2016, month: 'October', close: 700.97},
    {year: 2016, month: 'November', close: 745.69},
    {year: 2016, month: 'December', close: 963.74},
    {year: 2017, month: 'January', close: 970.40},
    {year: 2017, month: 'February', close: 1179.97},
    {year: 2017, month: 'March', close: 1071.79},
    {year: 2017, month: 'April', close: 1347.89},
    {year: 2017, month: 'May', close: 2286.41},
    {year: 2017, month: 'June', close: 2480.84},
    {year: 2017, month: 'July', close: 2875.34},
    {year: 2017, month: 'August', close: 4703.39},
    {year: 2017, month: 'September', close: 4338.71},
    {year: 2017, month: 'October', close: 6468.40},
    {year: 2017, month: 'November', close: 10233.60},
    {year: 2017, month: 'December', close: 14156.40},
    {year: 2018, month: 'January', close: 10221.10},
    {year: 2018, month: 'February', close: 10397.90},
    {year: 2018, month: 'March', close: 6973.53},
    {year: 2018, month: 'April', close: 9240.55},
    {year: 2018, month: 'May', close: 7494.17},
    {year: 2018, month: 'June', close: 6411.68},
    {year: 2018, month: 'July', close: 7781.87},
    {year: 2018, month: 'August', close: 7024.70},
    {year: 2018, month: 'September', close: 6631.01},
    {year: 2018, month: 'October', close: 6428.28},
    {year: 2018, month: 'November', close: 4014.94},
    {year: 2018, month: 'December', close: 3740.23},
    {year: 2019, month: 'January', close: 3450.11},
    {year: 2019, month: 'February', close: 3849.90},
    {year: 2019, month: 'March', close: 4136.33},
    {year: 2019, month: 'April', close: 5357.10},
    {year: 2019, month: 'May', close: 8575.66},
    {year: 2019, month: 'June', close: 10821.36},
    {year: 2019, month: 'July', close: 10082.24},
    {year: 2019, month: 'August', close: 9642.32},
    {year: 2019, month: 'September', close: 8299.39},
    {year: 2019, month: 'October', close: 9226.79},
    {year: 2019, month: 'November', close: 7583.80},
    {year: 2019, month: 'December', close: 7216.10},
    {year: 2020, month: 'January', close: 9357.21},
    {year: 2020, month: 'February', close: 8593.63},
    {year: 2020, month: 'March', close: 6448.75},
    {year: 2020, month: 'April', close: 8665.29},
    {year: 2020, month: 'May', close: 9459.36},
    {year: 2020, month: 'June', close: 9192.26},
    {year: 2020, month: 'July', close: 11332.07},
    {year: 2020, month: 'August', close: 11669.63},
    {year: 2020, month: 'September', close: 10780.09},
    {year: 2020, month: 'October', close: 13804.61},
    {year: 2020, month: 'November', close: 19694.60},
    {year: 2020, month: 'December', close: 28994.35},
    {year: 2021, month: 'January', close: 33053.68},
    {year: 2021, month: 'February', close: 45068.05},
    {year: 2021, month: 'March', close: 58776.76},
    {year: 2021, month: 'April', close: 57836.23},
    {year: 2021, month: 'May', close: 37366.18},
    {year: 2021, month: 'June', close: 35127.08},
    {year: 2021, month: 'July', close: 41766.48},
    {year: 2021, month: 'August', close: 47314.95},
    {year: 2021, month: 'September', close: 43858.37},
    {year: 2021, month: 'October', close: 61410.28},
    {year: 2021, month: 'November', close: 57032.31},
    {year: 2021, month: 'December', close: 46387.98},
    {year: 2022, month: 'January', close: 38500.79},
    {year: 2022, month: 'February', close: 43241.41},
    {year: 2022, month: 'March', close: 45538.68},
    {year: 2022, month: 'April', close: 37792.73},
    {year: 2022, month: 'May', close: 31858.14},
    {year: 2022, month: 'June', close: 19784.73},
    {year: 2022, month: 'July', close: 23336.90},
    {year: 2022, month: 'August', close: 20049.76},
    {year: 2022, month: 'September', close: 19431.79},
    {year: 2022, month: 'October', close: 20495.77},
    {year: 2022, month: 'November', close: 17168.57},
    {year: 2022, month: 'December', close: 16547.50}
];

const events = {
    stage1: [
        {year: 2010, text: "First public transaction: 10,000 BTC for two pizzas."},
        {year: 2010, text: "First cryptocurrency exchange BitcoinMarket.com launched."},
        {year: 2011, text: "Bitcoin price reaches $1 for the first time."},
        {year: 2011, text: "Silk Road marketplace launched using Bitcoin."},
        {year: 2012, text: "First Bitcoin halving reduced mining rewards from 50 BTC to 25 BTC."},
        {year: 2012, text: "Bitcoin Foundation established to promote development."}
    ],
    stage2: [
        {year: 2013, text: "Bitcoin breaks $100 and reaches $1,000 by December."},
        {year: 2013, text: "China enters the Bitcoin market with BTC China exchange."},
        {year: 2014, text: "Mt. Gox collapses after losing 850,000 BTC."},
        {year: 2014, text: "Price plummets from $1,000 to around $300."},
        {year: 2015, text: "Coinbase raises $75M in Series C funding."},
        {year: 2015, text: "Lightning Network concept proposed."}
    ],
    stage3: [
        {year: 2016, text: "Second Bitcoin halving reduces mining rewards to 12.5 BTC."},
        {year: 2016, text: "Ethereum gains traction."},
        {year: 2017, text: "Bitcoin reaches near $20,000 in December."},
        {year: 2017, text: "Bitcoin Cash hard fork occurs."},
        {year: 2017, text: "China bans ICOs and exchanges."},
        {year: 2018, text: "Cryptocurrency market crashes by over 80%."},
        {year: 2019, text: "Facebook announces Libra cryptocurrency project."},
        {year: 2019, text: "Bitcoin recovers to $10,000."}
    ],
    stage4: [
        {year: 2020, text: "Third Bitcoin halving reduces mining rewards to 6.25 BTC."},
        {year: 2020, text: "MicroStrategy begins accumulating Bitcoin."},
        {year: 2020, text: "COVID-19 pandemic fuels 'digital gold' narrative."},
        {year: 2021, text: "Bitcoin reaches new all-time high of $69,000."},
        {year: 2021, text: "El Salvador adopts Bitcoin as legal tender."},
        {year: 2021, text: "First Bitcoin futures ETF approved in the US."},
        {year: 2022, text: "Crypto market crashes: Bitcoin falls below $20,000."},
        {year: 2022, text: "Ethereum completes 'The Merge' to proof-of-stake."}
    ]
};

const stages = [
    {
        title: "Stage 1: Genesis & Early Adoption (2010-2012)",
        icon: "fas fa-seedling",
        description: "The foundational years where Bitcoin emerged from obscurity."
    },
    {
        title: "Stage 2: Volatility & Market Shakeout (2013-2015)",
        icon: "fas fa-chart-line",
        description: "Dramatic price swings and major challenges tested Bitcoin's resilience."
    },
    {
        title: "Stage 3: Mainstream Attention & Growth (2016-2019)",
        icon: "fas fa-users",
        description: "Bitcoin captures global attention and ecosystem diversifies."
    },
    {
        title: "Stage 4: Institutional Adoption (2020-2022)",
        icon: "fas fa-building",
        description: "Corporations and nations engage with Bitcoin."
    }
];

let currentStage = 0;
const margin = {top: 30, right: 20, bottom: 40, left: 50};
let width, height;
let svg, x, y, line;

function initVisualization() {
    const container = d3.select("#chart");
    container.html(""); // Clear previous content
    
    width = container.node().getBoundingClientRect().width - margin.left - margin.right;
    height = container.node().getBoundingClientRect().height - margin.top - margin.bottom;
    
    svg = container.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    let stageData;
    switch(currentStage) {
        case 0: stageData = btcData.filter(d => d.year >= 2010 && d.year <= 2012); break;
        case 1: stageData = btcData.filter(d => d.year >= 2013 && d.year <= 2015); break;
        case 2: stageData = btcData.filter(d => d.year >= 2016 && d.year <= 2019); break;
        case 3: stageData = btcData.filter(d => d.year >= 2020 && d.year <= 2022); break;
    }
    
    stageData.forEach(d => {
        d.date = new Date(d.year, getMonthIndex(d.month), 1);
        d.displayDate = `${d.month.substring(0, 3)} ${d.year}`;
    });
    
    stageData.sort((a, b) => a.date - b.date);
    
    const minPoint = stageData.reduce((min, p) => p.close < min.close ? p : min, stageData[0]);
    const maxPoint = stageData.reduce((max, p) => p.close > max.close ? p : max, stageData[0]);
    
    x = d3.scaleTime()
        .domain(d3.extent(stageData, d => d.date))
        .range([0, width]);
    
    y = d3.scaleLinear()
        .domain([0, d3.max(stageData, d => d.close) * 1.1])
        .range([height, 0]);
    
    line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.close))
        .curve(d3.curveMonotoneX);
    
    svg.append("path")
        .datum(stageData)
        .attr("fill", "none")
        .attr("stroke", "#3498db")
        .attr("stroke-width", 2)
        .attr("d", line);
    
    svg.selectAll(".dot")
        .data(stageData)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", d => x(d.date))
        .attr("cy", d => y(d.close))
        .attr("r", 2.5)
        .attr("fill", "#2ecc71")
        .on("mouseover", showTooltip)
        .on("mouseout", hideTooltip);
    
    addAnnotation(minPoint, "Low");
    addAnnotation(maxPoint, "High");
    
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");
    
    svg.append("g")
        .call(d3.axisLeft(y).tickFormat(d => "$" + d3.format(",")(d)))
        .append("text")
        .attr("fill", "#fff")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price (USD)");

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", -10)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("fill", "#3498db")
        .text(`Bitcoin Price: ${stages[currentStage].title}`);
    
    updateEvents();
    
    updateTimeline();
    
    updateStageIndicators();
}

function getMonthIndex(monthName) {
    const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];
    return months.indexOf(monthName);
}

function addAnnotation(point, label) {
    const annotationGroup = svg.append("g");
    
    annotationGroup.append("circle")
        .attr("class", "annotation")
        .attr("cx", x(point.date))
        .attr("cy", y(point.close))
        .attr("r", 5);
    
    annotationGroup.append("text")
        .attr("class", "annotation-text")
        .attr("x", x(point.date))
        .attr("y", y(point.close) - 8)
        .text(`${label}: $${d3.format(",")(point.close)}`);
        
    annotationGroup.append("text")
        .attr("class", "annotation-text")
        .attr("x", x(point.date))
        .attr("y", y(point.close) - 20)
        .text(`${point.month} ${point.year}`);
}

function showTooltip(event, d) {
    const tooltip = d3.select("#tooltip");
    tooltip.style("opacity", 0.9)
        .html(`<div class="date">${d.month} ${d.year}</div>
               <div>Price: <span class="price">$${d3.format(",")(d.close)}</span></div>`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
}

function hideTooltip() {
    d3.select("#tooltip").style("opacity", 0);
}

function updateEvents() {
    const eventsContainer = d3.select("#events");
    eventsContainer.html("");
    
    eventsContainer.append("div")
        .attr("class", "stage-title")
        .html(`<i class="${stages[currentStage].icon}"></i> ${stages[currentStage].title}`);
    
    eventsContainer.append("p")
        .style("margin-bottom", "15px")
        .style("color", "#a0d2eb")
        .style("font-size", "0.9rem")
        .text(stages[currentStage].description);
    
    let stageEvents;
    switch(currentStage) {
        case 0: stageEvents = events.stage1; break;
        case 1: stageEvents = events.stage2; break;
        case 2: stageEvents = events.stage3; break;
        case 3: stageEvents = events.stage4; break;
    }
    
    stageEvents.forEach(event => {
        eventsContainer.append("div")
            .attr("class", "event-item")
            .html(`<div class="event-year">${event.year}</div>
                   <div class="event-text">${event.text}</div>`);
    });
}

function updateTimeline() {
    const progress = d3.select("#timeline-progress");
    progress.style("width", `${(currentStage + 1) * 25}%`);
}

function updateStageIndicators() {
    d3.selectAll(".stage-dot")
        .classed("active", (d, i) => i === currentStage);
    
    d3.select("#prev-btn").property("disabled", currentStage === 0);
    d3.select("#next-btn").property("disabled", currentStage === 3);
}

function nextStage() {
    if (currentStage < 3) {
        currentStage++;
        initVisualization();
    }
}

function prevStage() {
    if (currentStage > 0) {
        currentStage--;
        initVisualization();
    }
}

function goToStage(stageIndex) {
    currentStage = stageIndex;
    initVisualization();
}

document.addEventListener("DOMContentLoaded", function() {
    initVisualization();
    
    d3.select("#next-btn").on("click", nextStage);
    d3.select("#prev-btn").on("click", prevStage);
    
    d3.selectAll(".stage-dot").on("click", function() {
        const stageIndex = parseInt(this.getAttribute("data-stage"));
        goToStage(stageIndex);
    });
    
    window.addEventListener("resize", initVisualization);
});
