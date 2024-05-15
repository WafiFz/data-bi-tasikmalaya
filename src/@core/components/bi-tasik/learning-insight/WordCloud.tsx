// components/WordCloud.tsx
import React from 'react';
import ReactWordcloud, { Options } from 'react-wordcloud';

const words = [
    { text: 'React', value: 30 },
    { text: 'Next.js', value: 20 },
    { text: 'TypeScript', value: 15 },
    { text: 'JavaScript', value: 25 },
    { text: 'Node.js', value: 10 },
    { text: 'Web Development', value: 20 },
    { text: 'Programming', value: 18 },
    // Tambahkan lebih banyak kata sesuai kebutuhan
];

const options: Options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
    enableOptimizations: false,
    svgAttributes: {},
    textAttributes: {},
    tooltipOptions: {}
};

const WordCloudComponent: React.FC = () => {
    return <ReactWordcloud words={words} options={options} />;
};


export default WordCloudComponent