interface IAbout {
  summary: ISummary;
  contact: IContact;
  tech: Array<string>;
}

interface ISummary {
  name: string;
  title: string;
  description: string;
}

interface IContact {
  phone: string;
  email: string;
  address: string;
  ig: string;
  linkedin: string;
}

export const about: IAbout = {
  summary: {
    description: `I'm always interested and passioned in technological
        developments. Always happy to learn new things. Ooh.. I really
        like to joke, joking to get rid of fatigue when working and on
        the other side, I like touring with my bestfriends.`,
    name: `Fajar Septiawan`,
    title: `Software Engineer`
  },
  contact: {
    phone: `085773799416`,
    address: `Jl. Raya PLP no 29 kp.candu RT 01 / RW 07 ,
        Tangerang, Banten`,
    email: `fajarsep12@gamil.com`,
    ig: `fajarsep12`,
    linkedin: `/in/fajar-septiawan-84419110a/`
  },
  tech: [
    'C#',
    '.NET CORE',
    'JS',
    'React',
    'Typescript',
    'SQL',
    'GIT',
    'DOCKER',
    'Kubernetes'
  ]
};
