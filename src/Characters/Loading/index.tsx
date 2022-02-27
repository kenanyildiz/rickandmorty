import React from "react";
import { loadingGif } from "./loadingGif";
import Character from "../Character";

const [{ images: { original: { url = "" } = {} } = {} }] = loadingGif;

const Loading = () => <Character isLoading data={{ image: url }} />;

export default Loading;
