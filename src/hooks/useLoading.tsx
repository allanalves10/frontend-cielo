import { useContext } from "react";
import { LoadContext } from "../contexts/LoadContext";

export function useLoading() {
    return useContext(LoadContext);
}