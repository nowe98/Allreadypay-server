'use strict'

const Slot = require('../models/slotModel');

exports.list_all_slot_in_machine = function (req, res) {
    Slot.getAllSloteInMachine(req.params.MachineID, function(err, slots) {

      console.log('slot controller')
      if (err)
          res.send(err);

      console.log('res', slots);
      res.json({"status":200,"message":"Data fetched successfully!", "SlotInMachine":slots});
    });
};

exports.read_a_slot = function(req, res) {
    Slot.getSlotById(req.params.MachineID, req.params.NumberSlot, function(err, slot) {
      if (err)
        res.send(err);
      res.json(slot[0]);
    })
}

exports.update_a_slot = function(req, res) {
    Slot.updateById(req.params.MachineID, req.params.NumberSlot, new Slot(req.body), function(err, slot) {
      if (err)
        res.send(err);
      res.json(slot);
    })
}
exports.update_amount = function(req, res) {
  Slot.setAmount(req.body.Amount,req.params.MachineID, req.params.NumberSlot, function(err, slot) {
    if (err)
      res.send(err);
    res.json(slot);
  })
}