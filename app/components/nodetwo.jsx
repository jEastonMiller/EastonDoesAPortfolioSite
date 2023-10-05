
'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function NodeTwo({ type }) {
 
  let palette = {
    primary: 'hsla(248, 34%, 26%, 1.0)',
    secondary: 'hsla(0, 0%, 97%, 1.0)',
    ternary: 'hsla(3, 80%, 52%, 1.0)',
    quaternary: 'hsla(4, 82%, 66%, 1.0)'
  }


  const [pathData, setPathData] = useState('');

  useEffect(() => {
    const numPoints = 4;
const width = 70;
const height = 70;
const randomPoints = generateRandomPoints(numPoints, width, height);
const svgPath = generateSVGPath(randomPoints);
    setPathData(svgPath);
  }, []);

  function generateRandomPoints(numPoints, width, height) {
    const points = [];
    const centerX = width / 2;
    const centerY = height / 2;
    const innerRadius = Math.min(width, height) * 0.1; // 10% of the smaller dimension
    const outerRadius = Math.min(width, height) * 0.2; // 40% of the smaller dimension

    for (let i = 0; i < numPoints; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        points.push({ x, y });
    }
    return points;
}

function findHighestCenterPoint(points) {
    // Find the point with the highest y-coordinate and closest to the horizontal center
    return points.reduce((highestPoint, currentPoint) => {
        if (currentPoint.y > highestPoint.y) {
            return currentPoint;
        }
        if (currentPoint.y === highestPoint.y && Math.abs(currentPoint.x - 0.5) < Math.abs(highestPoint.x - 0.5)) {
            return currentPoint;
        }
        return highestPoint;
    });
}

function findClosestClockwisePoint(currentPoint, remainingPoints) {
    // Find the closest point in a clockwise manner from the current point
    const sortedPoints = remainingPoints.sort((a, b) => {
        const angleA = Math.atan2(a.y - currentPoint.y, a.x - currentPoint.x);
        const angleB = Math.atan2(b.y - currentPoint.y, b.x - currentPoint.x);
        return angleA - angleB;
    });
    return sortedPoints[0];
}

function generateSVGPath(points) {
    const startPoint = findHighestCenterPoint(points);
    let path = `M ${startPoint.x} ${startPoint.y}`;
    let currentPoint = startPoint;
    const remainingPoints = [...points];
    remainingPoints.splice(remainingPoints.indexOf(startPoint), 1);

    for (let i = 0; i < points.length - 1; i++) {
        const nextPoint = findClosestClockwisePoint(currentPoint, remainingPoints);
        path += ` C ${currentPoint.x + 20} ${currentPoint.y}, ${nextPoint.x - 20} ${nextPoint.y}, ${nextPoint.x} ${nextPoint.y}`;
        currentPoint = nextPoint;
        remainingPoints.splice(remainingPoints.indexOf(nextPoint), 1);
    }

    // Close the path by connecting the last point to the start point
    path += ` C ${currentPoint.x + 2} ${currentPoint.y}, ${startPoint.x - 2} ${startPoint.y}, ${startPoint.x} ${startPoint.y}`;

    return path;
}

  return (
    <div className="node">
      <svg
        className="node"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fill='rgba(0, 0, 0, 0)'
            stroke={palette[type]}
            height="auto"
            width="auto"
            d={pathData} // Set the generated path data here
            transform="translate(0 0)"
          />
        </g>
      </svg>
    </div>
  );
}
