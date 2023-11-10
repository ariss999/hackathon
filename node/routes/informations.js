const express = require('express');
const router = express.Router();
const Information = require('../models/informations')


router.get('/', async (req, res) => {
  const users = await Information.findAll();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const user = await Information.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(user);
});


router.post('/', async (req, res) => {
  const { name,description,profile,address,tel,facebook,email,instagram,website,image1,image2,image3,image4,image5,image6 } = req.body;
  const newUser = await Information.create({
    name:"ผู้ใช้งาน",description:"-",profile,address:"-",tel:"-",facebook:"-",email:"-",instagram:"-",website:"-",image1,image2,image3,image4,image5,image6});
  res.json(newUser);
});

router.put('/:id', async (req, res) => {
  const { name,description,profile,address,tel,facebook,email,instagram,website,image1,image2,image3,image4,image5,image6 } = req.body;
  const information = await Information.findOne({
    where: {
      id: req.params.id
    }
  });

    information.name = name;
    information.description = description;
    information.profile = profile;
    information.address = address;
    information.tel = tel;
    information.facebook = facebook;
    information.email = email;
    information.instagram = instagram;
    information.website = website;
    information.image1 = image1;
    information.image2 = image2;
    information.image3 = image3;
    information.image4 = image4;
    information.image5 = image5;
    information.image6 = image6;
  

  await information.save();

  res.json(information);
});



module.exports = router;
