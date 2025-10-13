"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
app = express();
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["ServerError"] = 500] = "ServerError";
})(ResponseStatus || (ResponseStatus = {}));
app.get('/', (req, res) => {
    if (!req.query.userId) {
        res.status(ResponseStatus.NotFound).json({ message: "UserId is required" });
    }
});
//# sourceMappingURL=enum.js.map