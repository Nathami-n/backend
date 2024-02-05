let { people } = require("../data");
const getPeople =  (req,res) => {
    res.status(200).json({ success: true, data: people });
  };

  const postPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "please provide a name" });
    }
    res
      .status(201)
      .json({ success: true, data: [...people, { id: 3, name: name }] });
  };

  const updatePeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id.toString() === id);
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: "please provide the correct id" });
    }
    const newPeople = people.map((person) => {
      if (person.id.toString() === id) {
        person.name = name;
      }
      return person;
    });
  
    res.status(200).json({ success: true, data: newPeople });
  };
  
  const deletePerson =  (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id.toString() === id);
    if (!person) {
      return res.status(404).send({ success: false, msg: "No such person" });
    }
    const newPeople = people.filter((person) => {
      return person.id.toString() !== id;
    });
  
    res.status(200).json({ success: true, data: newPeople });
  };

  module.exports = {getPeople,updatePeople,postPeople,deletePerson};
  