import React from "react";
import { notFoundGif } from "./notFoundGif";
import Character from "../Character";

const [{ images: { original: { url = "" } = {} } = {} }] = notFoundGif;

const NotFound = () => <Character isNotFound data={{ image: url }} />;

export default NotFound;
