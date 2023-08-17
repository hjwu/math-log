/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //solSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  // /*
  // tutorialSidebar: [
  //   'intro',
  //   // 'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document', 'tutorial-basics/create-a-blog-post'],
  //   },
  // ],

  solSidebar: [
    'About',
    {
      type: 'category',
      label: 'Topics In Algebra',
      items: [
        {
          type: 'autogenerated',
          dirName: 'TIA',
        }
      ]
    },
    {
      type: 'category',
      label: 'Elementary Classical Analysis',
      items: [
        {
          type: 'autogenerated',
          dirName: 'ECA',
        }
      ]
    },
    {
      type: 'category',
      label: 'A Primer On Linear Algebra',
      items: [
        {
          type: 'autogenerated',
          dirName: 'APOLA',
        }
      ]
    },
    {
      type: 'category',
      label: '組合數學',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Combinatorics',
        }
      ]
    },
    {
      type: 'category',
      label: '其他書籍',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Books',
        }
      ]
    },
    {
      type: 'category',
      label: '答客問',
      items: [
        {
          type: 'autogenerated',
          dirName: 'misc',
        }
      ]
    },
    {
      type: 'category',
      label: '考古題',
      items: [
        {
          type: 'autogenerated',
          dirName: 'pastexam',
        }
      ]
    },
  ],

  // ecaSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'ECA',
  //   }
  // ],
  // cczSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'cczmod'
  //   }
  // ],
  // tiaSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'TIA'
  //   }
  // ],
};

module.exports = sidebars;
