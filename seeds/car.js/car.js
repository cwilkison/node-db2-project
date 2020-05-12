
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
      {vin: "23lklj2342",
      make: "Chrysler",
      model: "500",
      mileage: 23432,
      transmission: "Automatic",
      title: "Clean"
      },
      {vin: "453lnadekn2",
      make: "Lamborghini",
      model: "Huracan",
      mileage: 2340,
      transmission: "Manual",
      title: "Salvage"
      },
      ]);
    });
};

