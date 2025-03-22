
// export const amazonReceipt = [
//     {title: "Subsidy other business", percent: 6.0, highlight: "Alexa investment of $40Bn+", threshold: 0.2},
//     {title: "Profit", percent: 6.0, highlight: "Users << owners (Extract as much)", threshold: 0.3},
//     {title: "Sales & Admin", percent: 4.0, highlight: "100K+ Employees, Affiliate payments", threshold: 0.4},
//     {title: "R&D", percent: 3.5, highlight: "Incremental changes", threshold: 0.5},
//     {title: "Payment Process", percent: 2.5, highlight: "Other intermediaries (Visa, Chase) toll", threshold: 0.6},
//     {title: "Customer Service", percent: 1.5, highlight: "Impeccable customer service", threshold: 0.7},
//     {title: "Infra", percent: 0.5, highlight: "Centralized infra, gated data", threshold: 0.8},
// ]
// export const demaReceipt = [
//     {title: "Subsidy other business", percent: 0.0, highlight: "No other distractions", threshold: 0.2},
//     {title: "Profit", percent: 0.0, highlight: "Users === Owners (No extraction)", threshold: 0.3},
//     {title: "Sales & Admin", percent: 0.5, highlight: "~100 Employees", threshold: 0.4},
//     {title: "R&D", percent: 0.5, highlight: "Impactful innovation", threshold: 0.5},
//     {title: "Payment Process", percent: 0.2, highlight: "Pay for decentralized block space", threshold: 0.6},
//     {title: "Customer Service", percent: 1.0, highlight: "Matches the best, more efficiently", threshold: 0.7},
//     {title: "Infra", percent: 0.8, highlight: "Decentralized infra, slightly costlier", threshold: 0.8}
// ]

export const amazonReceipt = {
    SellersPay: {
        title: "What Sellers Pay",
        elements: [
            {title: "Referal Fees", percent: 15.0, highlight: "Amazon Keeps a quarter", threshold: 0.05},
            {title: "Ads", percent: 9.0, highlight: "Amazon keeps a quarter", threshold: 0.1},
        ],
        image: {
            src: "/images/about/CardReveal/quarterDollar.png",
            thresholdFrom: 0.1,
            thresholdTo: 0.2
        },
        thresholdFrom: 0.0,
        thresholdTo: 0.2
    },
    MarketPlace: {
        title: "How is the marketplace run?",
        elements: [
            {title: "Subsidy other business", percent: 6.0, highlight: "Alexa investment of $40Bn+", threshold: 0.3},
            {title: "Profit", percent: 6.0, highlight: "Users << owners (Extract as much)", threshold: 0.35},
            {title: "Sales & Admin", percent: 4.0, highlight: "100K+ Employees, Affiliate payments", threshold: 0.4},
            {title: "R&D", percent: 3.5, highlight: "Incremental changes", threshold: 0.45},
            {title: "Payment Process", percent: 2.5, highlight: "Other intermediaries (Visa, Chase) toll", threshold: 0.5},
            {title: "Customer Service", percent: 1.5, highlight: "Impeccable customer service", threshold: 0.55},
            {title: "Infra", percent: 0.5, highlight: "Centralized infra, gated data", threshold: 0.6},
        ],
        threshold: 0.2,
        image: {
            src: "/images/about/CardReveal/amazon.png",
            thresholdFrom: 0.2,
            thresholdTo: 0.3
        }
    }
}

export const demaReceipt = {
    SellersPay: {
        title: "What Sellers Pay",
        elements: [
            {title: "Referal Fees", percent: 7.5, highlight: "Dema keeps a penny", threshold: 0.05},
            {title: "Ads", percent: -4.5, highlight: "Dema keeps a penny", threshold: 0.1},
        ],
        image: {
            src: "/images/about/CardReveal/penny.png",
            thresholdFrom: 0.1,
            thresholdTo: 0.2
        },
        thresholdFrom: 0.0,
        thresholdTo: 0.2
    },
    MarketPlace: {
        title: "How is the marketplace run?",
        elements: [
            {title: "Subsidy other business", percent: 0.0, highlight: "No other distractions", threshold: 0.3},
            {title: "Profit", percent: 0.0, highlight: "Users === Owners (No extraction)", threshold: 0.35},
            {title: "Sales & Admin", percent: 0.5, highlight: "~100 Employees", threshold: 0.4},
            {title: "R&D", percent: 0.5, highlight: "Impactful innovation", threshold: 0.45},
            {title: "Payment Process", percent: 0.2, highlight: "Pay for decentralized block space", threshold: 0.5},
            {title: "Customer Service", percent: 1.0, highlight: "Matches the best, more efficiently", threshold: 0.55},
            {title: "Infra", percent: 0.8, highlight: "Decentralized infra, slightly costlier", threshold: 0.6}
        ],
        threshold: 0.2,
        image: {
            src: "/images/about/CardReveal/dema.png",
            thresholdFrom: 0.2,
            thresholdTo: 0.3
        }
    }
}