const { User } = require('../models');

const userdata = 

[
    {
       "username": "MagicMan",
       "password": "password"
    },

    {
        "username": "JakeDaDawg",
        "password": "password"
     },

     {
        "username": "BabyBoomBoom",
        "password": "password"
     }
];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;