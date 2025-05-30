type Account = {
  balance: number;
  name: string;
  accountType: string;
  openedDate: number; // timestamp
};

type ExistingAccount = Account & { balanceDiff: number };

type User = {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
};
