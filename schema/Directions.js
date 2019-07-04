cube(`Directions`, {
  sql: `SELECT * FROM \`atlas-cube.test.test\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    }
  }
});
