import { createSelector } from "reselect";
import React from "react";
import { makeSelectAnimePage } from "./selectors";

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
    animePage
}))

export function HotAnime() {

}