type Employee4 = {
  name: string;
  startDate: string;
};

type Manager5 = {
  name: string;
  department: string;
};

type TeamLead = Employee4 & Manager5;

let e: Employee4 = {
  name: "John",
  startDate: "2020-01-01",
};

let ms: Manager5 = {
  name: "Jane",
  department: "Sales",
};

let t: TeamLead = {
  name: "John",
  startDate: "2020-01-01",
  department: "Sales",
};

type GoodUser = {
  name: string;
  gift: string;
};

type BadUser = {
  name: string;
  ip: string;
};

type User5 = GoodUser | BadUser;

const j: User5 = {
  name: "John",
  gift: "123345",
};

type user7 = GoodUser & BadUser;
const g: User5 = {
  name: "John",
  gift: "123345",
  ip: "192.168.1.1",
};
