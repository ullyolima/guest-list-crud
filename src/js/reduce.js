const carros = [
    {brand: "fiat", color: "black", year: 2016},
    {brand: "renault", color: "red", year: 2020},
    {brand: "ferrari", color: "red", year: 2012},
    {brand: "camaro", color: "yellow", year: 2021},
    {brand: "fiat", color: "yellow", year: 2020},
    {brand: "renault", color: "black", year: 2016}
]

function groupBy (array, prop) {
    const result = array.reduce((total, item) => {
        let key = item[prop]
        total[key] = (total[key] || []).concat(item)
        return total
    }, {})
    return result
}

const groupByBrand = groupBy(carros, "brand")
const groupByColor = groupBy(carros, "color")
const groupByYear = groupBy(carros, "year")

console.log(groupByBrand)
console.log(groupByColor)
console.log(groupByYear)