// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'NicolasChagnet', // Your GitHub org/user name. (This is the only required config)
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
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['NicolasChagnet/arxiv-recommendations', 'NicolasChagnet/pokemon-team-optimizer', "NicolasChagnet/energy-demand-forecast", 'NicolasChagnet/ising-model-numerics','NicolasChagnet/snippy-rs', 'NicolasChagnet/arxiv_scanner_flask', 'NicolasChagnet/crop-recommendation'
        // , 'NicolasChagnet/zotero-lib-ML'
      ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      // header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
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
      to: 'Present',
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
      authors: 'Nicolas Chagnet and Koenraad Schalm',
      link: 'https://doi.org/10.21468/SciPostPhys.16.1.028',
      description:
        'We study charged hydrodynamics in a periodic lattice background. Fluctuations are Bloch waves rather than single momentum Fourier modes. At boundaries of the unit cell where hydrodynamic fluctuations are formally degenerate with their Umklapped copy, level repulsion occurs. Novel mode mixings between charge, sound, and their Umklapped copies appear at finite chemical potential - both at zero and finite momentum. We provide explicit examples for an ionic lattice, i.e. a periodic external chemical potential, and verify our results with numerical computations in fluid-gravity duality.',
    },
    {
      title: 'T-linear resistivity, optical conductivity, and Planckian transport for a holographic local quantum critical metal in a periodic potential',
      conferenceName: '',
      journalName: 'Physical Review B (2023)',
      authors: 'F. Balm, N. Chagnet, S. Arend, J. Aretz, K. Grosvenor, M. Janse, O. Moors, J. Post, V. Ohanesjan, D. Rodriguez-Fernandez, K. Schalm, and J. Zaanen',
      link: 'https://doi.org/10.1103/PhysRevB.108.125145',
      description:
        'High-Tc cuprate strange metals are characterized by a DC resistivity that scales linearly with T from the onset of superconductivity to the crystal melting temperature, characterized by a current life time τ≃ℏ/(kBT), the “Planckian dissipation”. At the same time, the optical conductivity ceases to be of the Drude form at high temperatures, suggesting a change of the underlying dynamics that surprisingly leaves the T-linear DC resistivity unaffected. We use the AdS/CFT correspondence that describes strongly coupled, densely many-body entangled metallic states of matter to study...',
    },
    {
      title: 'Quantization and variational problem of the Gubser-Rocha Einstein-Maxwell-Dilaton model, conformal and non-conformal deformations, and its proper thermodynamics',
      conferenceName: '',
      journalName: 'Journal of High Energy Physics',
      authors: 'Nicolas Chagnet, Floris Balm and Koenraad Schalm',
      link: 'https://doi.org/10.1007/JHEP03(2023)081',
      description:
        'We show that the strongly coupled field theory holographically dual to the Gubser-Rocha anti-de-Sitter Einstein-Maxwell-Dilaton theory describes not a single non-trivial AdS2​ IR fixed point, but a one-parameter family. It is dual to a local quantum critical phase instead of a quantum critical point. This result follows from a detailed analysis of the possible quantizations of the gravitational theory that is consistent with the thermodynamics of the analytical Gubser-Rocha black hole solution...',
    },
    {
      title: 'Emerging Fermi liquids from regulated quantum electron stars',
      conferenceName: '',
      journalName: 'Journal of High Energy Physics',
      authors: 'Nicolas Chagnet, Vladan Ðukić, Mihailo Čubrović and Koenraad Schalm ',
      link: 'https://doi.org/10.1007/JHEP08(2022)222',
      description:
        'We construct a fully quantum zero-temperature electron star in a soft-wall regulated anti-de-Sitter Einstein-Maxwell-Dirac theory that is thermodynamically stable compared to the Reissner-Nordström black hole. The soft wall only acts on the effective mass of the fermionic degrees of freedom, and allows for a controlled fully backreacted solution. The star is holographically dual to an RG flow where a gapped Fermi liquid starts to emerge from a UV CFT, but decouples again once the effective energy scale becomes lower than the gap of the fermionic degrees of freedom. The RG flow then returns to a non-trivial strongly coupled relativistic fixed point with a holographic dual. Our regulated quantum electron star is thus the fermionic analogue of the Horowitz-Roberts-Gubser-Rocha AdS-to-AdS domain wall solution for the holographic superconductor.',
    },
    {
      title: 'Complexity for Conformal Field Theories in General Dimensions',
      conferenceName: '',
      journalName: 'Physical Review Letters',
      authors: 'Nicolas Chagnet, Shira Chapman, Jan de Boer, and Claire Zukowski',
      link: 'https://doi.org/10.1103/PhysRevLett.128.051601',
      description:
        'We study circuit complexity for conformal field theory states in an arbitrary number of dimensions. Our circuits start from a primary state and move along a unitary representation of the Lorentzian conformal group. Different choices of distance functions can be understood in terms of the geometry of coadjoint orbits of the conformal group. We explicitly relate our circuits to timelike geodesics in anti–de Sitter space and the complexity metric to distances between these geodesics. We extend our method to circuits in other symmetry groups using a group theoretic generalization of the notion of coherent states.',
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
    defaultTheme: 'nord',

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
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
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
