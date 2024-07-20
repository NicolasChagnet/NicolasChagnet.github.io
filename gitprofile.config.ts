// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'NicolasChagnet', // Your GitHub org/user name. (This is the only required config)
    title: 'Postdoctoral researcher | Junior data scientist'
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [ // Let's try to keep it at 6
          'NicolasChagnet/arxiv-recommendations', 
          'NicolasChagnet/pokemon-team-optimizer', 
          'NicolasChagnet/energy-demand-forecast', 
          'NicolasChagnet/ising-model-numerics',
          'NicolasChagnet/game-ai-421-dice',
          'NicolasChagnet/snippy-rs', 
          // 'NicolasChagnet/arxiv-scanner-flask'
          // , 'NicolasChagnet/zotero-lib-ML'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
        projects_demos: [
          '', 
          'https://pokemon-team-optimizer.streamlit.app/', 
          'https://nicolaschagnet.github.io/energy-demand-forecast/', 
          '',
          '', 
          ''
        ],
        projects_previews: [
          'https://github.com/NicolasChagnet/arxiv-recommendations/blob/main/figs/frequency_title_words_bigram.png?raw=True',
          'https://github.com/NicolasChagnet/pokemon-team-optimizer/blob/main/demo/demo.gif?raw=True',
          'https://github.com/NicolasChagnet/energy-demand-forecast/blob/main/figs/plot_demo.png?raw=True',
          'https://github.com/NicolasChagnet/ising-model-numerics/blob/main/figs/animated_mc_spins.gif?raw=True',
          'https://github.com/NicolasChagnet/game-ai-421-dice/blob/main/figs/comparison_agents.png?raw=True',
          ''
        ]
      },
    },
    external: {
      // header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Pokemon Team Optimizer',
      //     description:
      //       'This project is about finding optimal Pokemon teams using optimization solvers.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://pokemon-team-optimizer.streamlit.app/',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Nicolas Chagnet',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'nchagnet',
    // inspire: 'https://inspirehep.net/authors/1944891',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nchagnet@pm.me',
    orcid: '0000-0002-4614-0821',
  },
  resume: {
    fileUrl:
      'nicolas_chagnet_cv.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Numpy',
    'Pandas',
    'Scikit-Learn',
    'SQL',
    'Tensorflow',
    // 'PySpark',
    // 'DataBricks',
    'Rust',
    'Julia',
    'HTML/CSS',
    'Javascript',
    'Linux'
  ],
  experiences: [
    {
      company: 'Leiden University',
      position: 'Research Scientist',
      from: 'September 2020',
      to: 'Present',
    },
    {
      company: 'Leiden University',
      position: 'Teacher Assistant',
      from: 'September 2020',
      to: 'Present',
    },
    {
      company: 'Leiden University/University of Amsterdam',
      position: 'Research Intern',
      from: 'September 2019',
      to: 'June 2020',
    },
  ],
  certifications: [
    {
      name: 'Kaggle',
      body: 'Various course completions',
      year: '2024',
      link: 'https://www.kaggle.com/nicolaschagnet',
    },
  ],
  educations: [
    {
      institution: 'Leiden University',
      degree: 'Ph.D. in Theoretical Physics',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'École Normale Supérieure de Lyon',
      degree: 'M.Sc. in Theoretical Physics',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'Lycée du Parc/École Normale Supérieure de Lyon',
      degree: 'B.Sc. in Math, Physics',
      from: '2014',
      to: '2017',
    },
  ],
  publications: [
    {
      title: 'Hydrodynamics of a relativistic charged fluid in the presence of a periodically modulated chemical potential',
      conferenceName: '',
      journalName: 'Scipost Physics (2024)',
      authors: 'N. Chagnet and K. Schalm',
      link: 'https://doi.org/10.21468/SciPostPhys.16.1.028',
      description:
        '',
      pdf_link: 'https://arxiv.org/pdf/2303.17685'
    },
    {
      title: 'T-linear resistivity, optical conductivity, and Planckian transport for a holographic local quantum critical metal in a periodic potential',
      conferenceName: '',
      journalName: 'Physical Review B (2023)',
      authors: 'F. Balm, N. Chagnet, S. Arend, J. Aretz, K. Grosvenor, M. Janse, O. Moors, J. Post, V. Ohanesjan, D. Rodriguez-Fernandez, K. Schalm, and J. Zaanen',
      link: 'https://doi.org/10.1103/PhysRevB.108.125145',
      description:
        '',
      pdf_link: 'https://arxiv.org/pdf/2211.05492'
    },
    {
      title: 'Quantization and variational problem of the Gubser-Rocha Einstein-Maxwell-Dilaton model, conformal and non-conformal deformations, and its proper thermodynamics',
      conferenceName: '',
      journalName: 'Journal of High Energy Physics',
      authors: 'N. Chagnet, F. Balm and K. Schalm',
      link: 'https://doi.org/10.1007/JHEP03(2023)081',
      description:
        '',
      pdf_link: 'https://arxiv.org/pdf/2209.13951'
    },
    {
      title: 'Emerging Fermi liquids from regulated quantum electron stars',
      conferenceName: '',
      journalName: 'Journal of High Energy Physics',
      authors: 'N. Chagnet, V. Ðukić, M. Čubrović and K. Schalm ',
      link: 'https://doi.org/10.1007/JHEP08(2022)222',
      description:
        '',
      pdf_link: 'https://arxiv.org/pdf/2204.10092'
    },
    {
      title: 'Complexity for Conformal Field Theories in General Dimensions',
      conferenceName: '',
      journalName: 'Physical Review Letters',
      authors: 'N. Chagnet, S. Chapman, J. de Boer and C. Zukowski',
      link: 'https://doi.org/10.1103/PhysRevLett.128.051601',
      description:
        '',
      pdf_link: 'https://arxiv.org/pdf/2103.06920'
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      // primary: '#353bf7',
      primary: '#0E30F1',
      secondary: '#219aaf',
      accent: '#ffffff',
      neutral: '#2A2730',
      'base-100': '#ffffff',
      'base-200': '#f9fafb',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
