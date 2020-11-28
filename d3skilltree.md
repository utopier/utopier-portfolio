import React, { useEffect } from 'react';
import './index.scss';

import \* as d3 from 'd3';

const skills = [
// root
{ id: 'tech', label: 'Tech Tree' },
// second
{ parentId: 'tech', id: 'frontend', label: 'Frontend' },
{ parentId: 'tech', id: 'backend', label: 'Backend' },
{ parentId: 'tech', id: 'backend', label: 'Web' },
{ parentId: 'tech', id: 'languages', label: 'Languages' },
// third
{
parentId: 'languages',
id: 'python',
label: 'Python',
//iconHref: require('../assets/icons/python.png'),
skillLevel: 90,
descriptions: [
'Mainly worked with webserver backend frameworks with it.',
'Used in some simple machine learning applications and projects such as Gestice League and Project 21.',
],
},
];

let skillTree;

const Home = () => {
useEffect(() => {
createSkillTree();
}, []);

const createSkillTree = () => {
const svg = d3
.select('#skill-tree-container')
.append('svg')
.attr('width', '100%')
.attr('height', '800');

    skillTree = svg.append('g');
    drawTree();

};

const drawTree = () => {
let hierarchy = d3.stratify()(skills);
const treeLayout = d3.tree().size([1400, 500]);
hierarchy = treeLayout(hierarchy);
// console.log(hierarchy);

    const links = hierarchy.links();
    const nodes = hierarchy.descendants();
    // console.log(`links : ${links}`);
    // console.log(`nodes : ${nodes}`);

    skillTree
      .selectAll('rect')
      .data(nodes)
      .enter()
      .append('rect')
      .attr('height', (d) => {
        return '50px';
      })
      .attr('width', (d) => '50px')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y);

    // const link = skillTree.selectAll('path.link').data(links, function (d) {
    //   return d.target.id;
    // });

    // link
    //   .enter()
    //   .insert('path', 'g')
    //   .attr('class', 'link')
    //   .attr(
    //     'd',
    //     d3
    //       .linkHorizontal()
    //       .x(function (d) {
    //         console.log(d);
    //         return d.y;
    //       })
    //       .y(function (d) {
    //         return d.x;
    //       })
    //   );

};

return <div id="skill-tree-container" style={{ height: '800px' }}></div>;
};

export default Home;
// https://levelup.gitconnected.com/building-a-rpg-like-skill-tree-98bfdbef01de
// https://bl.ocks.org/d3noob/8375092
// https://bl.ocks.org/d3noob/80c100e35817395e88918627eeeac717
// https://gist.github.com/d3noob/8375092
