const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    //Simulate fetching user data (replace with your actual logic)
    const user = await fetchUser(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Error fetching user' });
  }
});

async function fetchUser(id){
  //Replace with database query or other logic to fetch user
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [{
        id: '1',
        name: 'John Doe'
      },{
        id: '2',
        name: 'Jane Doe'
      }];
      const user = users.find(user => user.id === id);
      resolve(user);
    }, 500);
  })
}
