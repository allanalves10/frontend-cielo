import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";

export function useTransaction() {
    return useContext(TransactionContext);
}