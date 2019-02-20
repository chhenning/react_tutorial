import { Person } from "./Person";
import { Teacher } from "./Teacher";

const p = new Person("Christian");
console.log(p);

const t = new Teacher("Sophie", "Master");
console.log(t);
t.walk();
t.teach();
