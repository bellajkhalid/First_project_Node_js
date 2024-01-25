const express = require('express');
const Fun=require('./Function')
const app = express();
const port = 9000;

// Endpoint for + and *
app.get('/:function/:var_1/:var_2', (req, res) => {
  // Retrieve variables from the URL
  const var_f = req.params.function;
  const var_1 = parseFloat(req.params.var_1);
  const var_2 = parseFloat(req.params.var_2);

  // Check if the variables are valid numbers
  if (isNaN(var_1) || isNaN(var_2)) {
    return res.status(400).json({ error: 'Variables must be valid numbers.' });
  }

  console.log(`var_f: ${var_f}`);

  // Calculate the sum or product based on the provided function
  let response;
  switch (var_f) {
    case 'Sum':
        response =Fun.Sum(var_1,var_2);// Calculate the sum 
      break;
    case 'Product':
        response =Fun.Pro(var_1,var_2);// Calculate the product 
      break;
    default:
      return res.status(400).json({ error: 'Unsupported operation.' });
  }

  // Return the response in JSON
  console.log(`Response: ${response}`);
  res.json({ response: `Operation result of ${var_1} ${var_f} ${var_2} is : ${response}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
