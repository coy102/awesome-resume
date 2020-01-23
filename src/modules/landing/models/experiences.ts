interface IWork {
  place: string;
  workExperince: Array<IWorkExperiences>;
}

interface IWorkExperiences {
  job: string;
  project: string;
  rangeDate: string;
  tech: Array<string>;
  description: string;
  url?: string;
  responbility: Array<string>;
  images?: Array<string>;
}

interface IEducations {
  place: string;
  focus?: string;
  rangeDate: string;
  description: string;
}

export const WorkExperiences: Array<IWork> = [
  {
    place: `Visionet Data Internasional`,
    workExperince: [
      {
        job: `Fullstack Developer`,
        project: 'Merchant Originating System - Bank Mandiri',
        description:
          'MOS is a web-based application for accepting EDC requests for all Mandiri bank customer merchants',
        rangeDate: `2016 - 2017`,
        tech: ['Jquery', 'ASP.NET MVC', 'Ajax', 'SQL Server'],
        responbility: [
          'Rebuild MOS 3 from MS Infopath to ASP.NET MVC 5',
          'Support after Production Ready'
        ],
        images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg']
      },
      {
        job: `Fullstack Developer`,
        project: 'Design Management System - Lippo Karawaci',
        description:
          'DMS is used to calculate the coefficient of buildings such as houses, offices, schools, hotels, hospitals, apartments, and malls',
        rangeDate: `2017 - 2018`,
        tech: ['AngularJS', 'ASP.NET MVC', 'SQL Server'],
        responbility: [
          'Develop Application web based application',
          'Support after Production Ready'
        ],
        images: ['1.jpeg', '2.jpeg', '3.jpeg']
      },
      {
        job: `Mobile Developer (Hard Support)`,
        project: 'Employee Services - Lippo Homes',
        description:
          'Employee service is intended to provide training, tasks, and social media for all Lippo Homes employees',
        rangeDate: `2017 - 2018`,
        tech: ['React JS', 'React Native', 'Redux Thunk'],
        responbility: ['Supporting for fixing bugs and adjusments']
      },
      {
        job: `Frontend Developer (Web)`,
        project: 'Rumah Vidia',
        description:
          'Vidia House is a marketplace that sells and rents a property',
        rangeDate: `2017 - 2018`,
        tech: ['React JS', 'Next JS', 'Redux Saga', 'Typescript'],
        responbility: ['Develop web platform Rumah Vidia'],
        url: 'www.rumahvidia.com'
      },
      {
        job: `Tech Lead`,
        project: 'My Greend Coco Land',
        description:
          'GCL is used as a content management system to promote the company used in the mobile app.',
        rangeDate: `2017 - 2018`,
        tech: [
          'React JS',
          'Next JS',
          'Redux Saga',
          'Typescript',
          'NET CORE',
          'My SQL'
        ],
        responbility: [
          'Lead & design architecture engine tech Web FE & BE',
          'Training and mentoring junior developer'
        ]
      },
      {
        job: `Tech Lead Microservices`,
        project: 'Infinity 8',
        description:
          'Infinity8 is used to sell, promote, regulate the sale of property used by internal companies of Lippo Karawaci, Meikarta, and Lippo Cikarang.',
        rangeDate: `2017 - 2018`,
        tech: [
          'NET Core',
          'Kubernetes',
          'Docker',
          'RabbitMQ',
          'SQL Server',
          'My SQL'
        ],
        responbility: [
          'Lead & design architecture engine tech BE Microservices',
          'Research and Development'
        ]
      },
      {
        job: `Frontend Developer (Web)`,
        project: 'User Management - Infinity 8',
        description:
          'Infinity8 is used to sell, promote, regulate the sale of property used by internal companies of Lippo Karawaci, Meikarta, and Lippo Cikarang. User management is used to manage all application user data',
        rangeDate: `2017 - 2018`,
        tech: ['React JS', 'Next JS', 'MobX', 'Typescript'],
        responbility: ['Develope Web App user management']
      }
    ]
  }
];
