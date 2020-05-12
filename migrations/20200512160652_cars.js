
exports.up = function(knex) {
    return knex.schema.createTable("car", tbl => {
        tbl.increments();
        tbl.string("vin", 255).notNullable().unique();
        tbl.string("make", 255).notNullable();
        tbl.string("model", 255).notNullable();
        tbl.integer('mileage').notNullable();
      
        
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car");
  };


