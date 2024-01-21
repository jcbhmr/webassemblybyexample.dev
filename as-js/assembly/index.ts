export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function scream(message: string): string {
  return message.toUpperCase();
}

class PlainPerson {
  name: string;
  birthDate: Date;
}
export function alanTuring(): PlainPerson {
  return {
    name: "Alan Turing",
    birthDate: Date.parse("1912-06-23"),
  };
}

class ComplexPerson {
  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }
  name: string;
  birthDate: Date;
}
export function adaLovelace(): ComplexPerson {
  return new ComplexPerson("Ada Lovelace", Date.parse("1815-12-10"));
}
export function computeAge(person: ComplexPerson): f64 {
  const seconds = f64(Date.now()) - f64(person.birthDate.getTime());
  return Math.floor(seconds / (1000 * 60 * 60 * 24 * 365.25));
}
