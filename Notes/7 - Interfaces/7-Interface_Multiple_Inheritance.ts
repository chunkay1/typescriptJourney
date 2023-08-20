// We’re not limited to a single inheritance model - we can actually build off of these extensions and extend for multiple interfaces!

interface Person5 {
  name: string;
}

interface Employee {
  readonly id: number,
  email: string
}

interface Engineer extends Person5, Employee {
  level: string,
  languages: string[];
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 456,
  email: 'piepie@gmail.com',
  level: 'senior',
  languages: ['TypeScript', 'JavaScript', 'React']
}
