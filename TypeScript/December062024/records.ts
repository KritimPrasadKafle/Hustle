type Usere = {
  id: string;
  username: string;
};

type Users12 = {
  [key: string]: Usere;
};
type recordUsers = Record<string, { age: number; name: string }>;

const users32: Users12 = {
  "ras@qd1": {
    id: "ras@qd1",
    username: "hello",
  },
  "ras@qd2": {
    id: "ras@qd1",
    username: "hey",
  },
};

const users123: recordUsers = {
  ras: {
    age: 12,
    name: "kritim",
  },
  ras2: {
    age: 12,
    name: "kritim",
  },
};
