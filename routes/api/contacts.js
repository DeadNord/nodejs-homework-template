const express = require("express");
const Joi = require("joi");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  listContacts().then(contacts => {
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts,
      },
    });
  });
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  // console.log(id);
  getContactById(id).then(contact => {
    if (contact) {
      res.json({
        status: "success",
        code: 200,
        data: {
          contact,
        },
      });
    }
    if (!contact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id=${id} not found`,
      });
    }
  });
});

router.post("/", async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    phone: Joi.string().min(3).max(30).required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    res.status(400).json({
      status: validationResult.error.details,
      code: 400,
    });
  } else {
    const { name, email, phone } = req.body;
    addContact(name, email, phone).then(newContact => {
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          result: newContact,
        },
      });
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  removeContact(id).then(deleteContact => {
    if (deleteContact) {
      res.json({
        status: "success",
        code: 200,
        data: {
          result: deleteContact,
        },
      });
    }
    if (!deleteContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id=${id} not found`,
      });
    }
  });
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    phone: Joi.string().min(3).max(30).required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    res.status(400).json({
      status: validationResult.error.details,
      code: 400,
    });
  } else {
    const { name, email, phone } = req.body;
    updateContact(id, name, email, phone).then(updateContact => {
      if (updateContact) {
        res.json({
          status: "success",
          code: 200,
          data: {
            result: updateContact,
          },
        });
      }
      if (!updateContact) {
        res.status(404).json({
          status: "error",
          code: 404,
          message: `Contact with id=${id} not found`,
        });
      }
    });
  }
});

module.exports = router;
