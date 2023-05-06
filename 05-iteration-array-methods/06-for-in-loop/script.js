const car = {
  brand: 'Honda',
  model: 's2000',
  hPower: 550,
  price: '15k',
  ownership: false,
}

for (const component in car) {
  console.log(component, car[component])
}
