const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };
  
  const luggageMaxSize = flight.baglimit;

  document.body.innerHTML += `<p>Destination country is <b>${flight.countryTo.name}</b> and departure country is <b> ${flight.countryFrom.name}.</b>  </p>`
  document.body.innerHTML += `<h4> Important: Carry-on luggage limitations</h4>`
  document.body.innerHTML += `<p>Maximum weight of carry-on luggage is <b> ${luggageMaxSize.hand_weight} kg</b>. Regarding metric limits, maximum height is  <b>${luggageMaxSize.hand_height} cm</b>, 
                              maximum length is  <b>${luggageMaxSize.hand_length} cm</b> and maximum width is  <b>${luggageMaxSize.hand_width} cm</b>.</p>`
  document.body.innerHTML +=  `<h4> Important: Checked luggage limitations </h4>
                              <p>Regarding checked luggage, maximum height is <b> ${luggageMaxSize.hold_height} cm</b>, maximum width is <b>${luggageMaxSize.hold_width} cm</b>
                              maximum weight is <b>${luggageMaxSize.hold_weight} kg</b> and maximum length is <b>${luggageMaxSize.hold_length} cm.</b> There is also limitation on cumulative dimensions. It is <b> ${luggageMaxSize.hold_dimensions_sum} cm</b>.</p>`
  document.body.innerHTML += `<h4> Extra costs of second luggage </h4>`                               
  document.body.innerHTML += `<p>In case you need to travel with two baggages, you will pay for the second one <b> ${Math.ceil(flight.conversion.EUR*(flight.bags_price['2']))} CZK.</b> </p>`