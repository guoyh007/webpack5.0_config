const express = require('express');

const app = express();
console.log('app:@a!!! ', app);

app.get('/api/users', (req, res) => {
  res.json({
    code: 0,
    data: [{
      id: 1,
    }]
  })
});

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});