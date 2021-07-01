const seeder = require('mongoose-seed');
require('dotenv').config();

let users = [
  {
    username: 'Do Viet Tri',
    email: 'doviettri27091999@gmail.com',
    avatar: 'avatar.png'
  },
  {
    username: 'Do Viet Linh',
    email: 'tri.dv270999@gmail.com',
    avatar: 'avatar.png'
  },
  {
    username: 'Do Viet Thuc',
    email: 'doviettri01@gmail.com',
    avatar: 'avatar.png'
  },
];

let data = [{
  'model': 'User',
  'documents': users
}];

seeder.connect(process.env.DB_URL, () => {
  seeder.loadModels([
    '../models/userModel'
  ]);
  seeder.clearModels('User', () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
