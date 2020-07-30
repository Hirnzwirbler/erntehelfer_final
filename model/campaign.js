const mongoose = require("mongoose");
const user = require("./user");

const CampaignSchema = mongoose.Schema({
    creator: { 
        type: Schema.Types.ObjectId, 
        ref: user 
    },
    description: {
        type: String,
        required: true
    },
    dateWhen: {
        type: Date,
        required: true
    },
    applicants: [{
        type: Schema.Types.ObjectId, 
        ref: user 
    }]

});

module.exports = {
    model: mongoose.model("campaign", CampaignSchema),
    schema: CampaignSchema
};