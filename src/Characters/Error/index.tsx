import React from "react";
import { errorGif } from "./errorGif";
import Character from "../Character";

const [{ images: { original: { url = "" } = {} } = {} }] = errorGif;

const Error = () => <Character hasError data={{ image: url }} />;

export default Error;
