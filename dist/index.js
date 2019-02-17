"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DynamicHeadInsertion(headElement) {
    if (headElement) {
        var documentHead = document.head || document.getElementsByTagName('head')[0];
        documentHead.appendChild(headElement);
    }
}
exports.default = DynamicHeadInsertion;
