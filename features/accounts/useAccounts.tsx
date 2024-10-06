import { useEffect, useState } from "react";
import {
  DEMO_CHECKING_ACCOUNT,
  DEMO_SAVINGS_ACCOUNT,
} from "./mock-account-data";
import { Account } from "./account.types";

export function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [status, setStatus] = useState<"pending" | "ready" | "error">(
    "pending"
  );

  useEffect(() => {
    setTimeout(() => {
      setAccounts([DEMO_CHECKING_ACCOUNT, DEMO_SAVINGS_ACCOUNT]);
      setStatus("ready");
    }, 1500);
  }, []);

  return { status, accounts };
}
