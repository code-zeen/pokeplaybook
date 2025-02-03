export interface CardMarket {
    prices: {
        avg1: number // last day
        avg7: number // last 7 days
        avg30: number // last 30 days
        averageSellPrice: number // for non-foils
        germanProLow: number // lowest sell price from German professional sellers
        lowPrice: number // lowest price at the market for non-foils
        lowPriceExPlus: number // lowest price at the market for non-foils with condition EX or better
        reverseHoloAvg1: number // last day for reverse holos
        reverseHoloAvg7: number // last 7 days for reverse holos
        reverseHoloAvg30: number // last 30 days for reverse holos
        reverseHoloLow: number // lowest price at the market as shown at the website (for condition EX+) for reverse holos
        reverseHoloSell: number // average sell price as shown in the chart at the website for reverse holos
        reverseHoloTrend: number // trend price as shown at the website (and in the chart) for reverse holos
        suggestedPrice: number // suggested sell price for professional users, determined by an internal algorithm
        trendPrice: number // trend price as shown at the website (and in the chart) for non-foils
    }
    url: string
}
