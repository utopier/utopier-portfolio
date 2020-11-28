import React, { useEffect } from 'react';
import './index.scss';
import SkillRoleCard from '../../components/SkillRoleCard';

const skillData = [
  {
    title: 'Frontend',
    section: [
      {
        title: 'Basic',
        names: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        title: 'Library',
        names: ['React', 'Nextjs'],
      },
      {
        title: 'State Management',
        names: ['Redux', 'Redux-Saga', 'Apollo'],
      },
      {
        title: 'Design',
        names: ['Emotion', 'Styled-Components', 'Storybook'],
      },
      {
        title: 'Tech',
        names: ['PWA', 'SEO', 'AMP'],
      },
      {
        title: 'Testing',
        names: ['jest', 'react-testing-library', 'cypress'],
      },
      {
        title: 'Linter & CodeFormatter',
        names: ['ESLint', 'Prettier'],
      },
      {
        title: 'Transpiler',
        names: ['Babel'],
      },
      {
        title: 'Builder',
        names: ['Webpack'],
      },
      {
        title: 'CICD',
        names: ['CircleCI'],
      },
      {
        title: 'Theory',
        names: [
          'Responsive',
          'Accessibility',
          'CrossBrowser',
          'Performance',
          'Security',
          'HTTP',
          'Socket',
        ],
      },
    ],
  },
  {
    title: 'Backend',
    section: [
      {
        title: 'Tech',
        names: ['Nodejs', 'Express'],
      },
      {
        title: 'API',
        names: ['REST API', 'Graph API'],
      },
      {
        title: 'DB',
        names: ['MySQL', 'MongoDB', 'Redis'],
      },
      {
        title: 'ORM',
        names: ['TypeORM', 'Sequelize', 'TypeORM'],
      },
    ],
  },
  {
    title: 'Devops',
    section: [
      {
        title: 'Infrastructure',
        names: ['Serverless', 'AWS', 'Linux', 'Docker'],
      },
      {
        title: 'Agile',
        names: ['Github', 'Git', 'GitFlow', 'Jira', 'Slack'],
      },
    ],
  },
  {
    title: 'MISC',
    section: [
      {
        title: 'Infrastructure',
        names: ['Serverless', 'AWS', 'Linux', 'Docker'],
      },
      {
        title: 'Agile',
        names: ['Github', 'Git', 'GitFlow', 'Jira', 'Slack'],
      },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills__container">
      {skillData.map((role) => {
        return <SkillRoleCard title={role.title} section={role.section} />;
      })}
      {/* <SkillRoleCard title="Frontend" />
      <SkillRoleCard title="Backend" />
      <SkillRoleCard title="Devops" />
      <SkillRoleCard title="MISC" /> */}
    </div>
  );
};

export default Skills;
