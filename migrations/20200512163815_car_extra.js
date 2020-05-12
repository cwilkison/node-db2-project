
exports.up = function(knex) {
    return knex.schema.table("car", tbl => {
        tbl.string("transmission", 255);
        tbl.string("title", 255);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table("car", tbl => {
        tbl.dropColumn('transmission');
        tbl.dropColumn('title');
    });
  };


