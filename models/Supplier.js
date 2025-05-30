// Import Mongoose to define the schema and interact with MongoDB
const mongoose = require("mongoose");

// Define a schema for Supplier — represents a vendor providing products
const supplierSchema = new mongoose.Schema({

  // Supplier's name (e.g., "ABC Textiles Ltd.")
  name: { 
    type: String, 
    required: true             // Name is mandatory for identification
  },

  // Contact number or info (e.g., phone, person-in-charge)
  contact_info: { 
    type: String, 
    required: true             // Critical for communication
  },

  // Email address for correspondence
  email: { 
    type: String, 
    required: true             // Enforces accountability and digital comms
  },

  // Physical or mailing address of the supplier
  address: { 
    type: String, 
    required: true             // Useful for invoices, deliveries, legal docs
  },

  // Supplier performance rating (e.g., from feedback or analytics)
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    default: 0                // Default is 0 until evaluated; scale of 1–5
  },

}, { 
  timestamps: true             // Adds createdAt and updatedAt fields
});

// Export the model so it can be used in business logic (CRUD, queries, etc.)
module.exports = mongoose.model("Supplier", supplierSchema);
