'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import { useState, useEffect } from 'react';
import blobshape from 'blobshape';
import Blob from './blob';


const inter = Inter({ subsets: ['latin'] });

export default function NodeVisualizer({ type }) {
  const[nodes, setNodes] = useState([]);
  const [colors, setColors] = useState([
    'hsla(248, 34%, 26%, 1.0)',
    'hsla(0, 0%, 97%, 1.0)',
    'hsla(3, 80%, 52%, 1.0)',
    'hsla(4, 82%, 66%, 1.0)'
  ]);
  const [head, setHead] = useState({});
  const [tail, setTail] = useState({});
  const [bst, setBST] = useState({});
  const [sort, setSort] = useState(null);

  
  const handleCreateNode = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 100) + 100
    const growth = Math.floor(Math.random() * 6) + 1;
    const edges = Math.floor(Math.random() * 15) + 4;
    const opacity = (Math.random() * 0.35) + 0.8;
    const floatPositions = [];
    const colorSortCoords = [];

    const randFloatPosition = (range = 60, shift = 4) => Math.floor(Math.random() * range) + shift;
    floatPositions.push({
      left: `${randFloatPosition()}%`,
      top: `${randFloatPosition()}%`
    })

    const colorFloatPosition = (range, shiftX, shiftY) => {
      return {
        top: `${Math.floor(Math.random() * range) + shiftY}%`,
        left: `${Math.floor(Math.random() * range) + shiftX}%`,
      }
    }

    if (color === colors[0]) colorSortCoords.push(colorFloatPosition(7, 4, 4));
    if (color === colors[1]) colorSortCoords.push(colorFloatPosition(10, 50, 4));
    if (color === colors[2]) colorSortCoords.push(colorFloatPosition(10, 4, 50));
    if (color === colors[3]) colorSortCoords.push(colorFloatPosition(10, 50, 50));

    const generateFloatList = (list) => {
      for (let i = 0; i < 3; i++) {
        let position = {};
        let prevPoint = list[i]
    
        if (Math.random() < 0.5) position.left = `${parseInt(prevPoint.left) + randFloatPosition(2,0)}%`;
        else position.left = `${parseInt(prevPoint.left) - randFloatPosition(2,0)}%`;
        
        if (Math.random() < 0.5) position.top = `${parseInt(prevPoint.top) + randFloatPosition(2,0)}%`
        else position.top = `${parseInt(prevPoint.top) - randFloatPosition(2,0)}%` 
        
        list.push(position);
      }
    }
    
    generateFloatList(floatPositions);
    generateFloatList(colorSortCoords);



    let node = {
      color: color,
      size: size,
      growth: growth,
      edges: edges,
      paths: [],
      opacity: opacity,
      next: null,
      left: null,
      right: null,
      positionX: null,
      positionY: null,
      floatList: floatPositions,
      colorSortList: colorSortCoords
    }

    for (let i = 0; i < 15; i++) {
      const { path } = blobshape({ size: size, growth: growth, edges: edges, seed: null })
      node.paths.push(path);
    }
    
    return node;
  }
  
  const handleAddNode = () => {
    let addedNode = handleCreateNode();
    const newNodes = JSON.parse(JSON.stringify(nodes));
    newNodes.push(addedNode);
    setNodes(newNodes);
    // if(head === null) {
    //   setHead(newNode);
    //   setTail(newNode);
    // } else {
    //   const newLinkedList = JSON.parse(JSON.stringify(linkedList))
    //   linkedList.tail.next = addedNode;
    //   linkedList.tail = addedNode;
    //   // setLinkedList(newLinkedList);
    // }
    console.log('hello')
  }

  const handleDeleteNode = () => {
  
    const newNodes = JSON.parse(JSON.stringify(nodes));
    newNodes.pop();
    setNodes(newNodes);
  }


  useEffect(() => {
    const nodeList = [];
   
    for (let i = 0; i < 1; i++) {
      let newNode = handleCreateNode();

      nodeList.push(newNode);
    }
    setNodes(nodeList);


  }, [])

  // useEffect(() => {

  // }, [linkedList, bst])

  return (
    <div 
      className={styles.nodeVisualizer}
    >
      <div
        className={styles.title}
      >
        <h1>Data Structure Visualizer</h1>
      </div>
      
      <p
        className={styles.blurb}
      >
        Data Structures are cool! How about you take a look at these different ways to visualize them.</p>
      <div
        className={styles.controlBox}
      >
        <div
          className={styles.action}
        >
          <button
            onClick={() => {
              handleAddNode()
            }}
          >ADD node</button>
          <button
            onClick={() => {
              handleDeleteNode();
            }}
          >delete NODE</button>
          <button>TELL NODE IT LOOKS pretty</button>
        </div>
        <div
          className={styles.category}
        >
          <p>view</p>
          <button>BST</button>
          <button>LINKED LIST</button>
          <button
            onClick={() => {
              setSort('color');
            }}
          >COLOR</button>
          <button>SIZE</button>
        </div>
      </div>

      <div
        className={styles.playground}
      >
       {nodes.map((element, index) => (
       <Blob 
        color={element.color} 
        size={element.size} 
        growth={element.growth}
        edges={element.edges} 
        paths={element.paths}
        floatList={element.floatList}
        opacity={element.opacity}
        sort={sort}
        colorSortList={element.colorSortList}
        key={index}
        />
        ))}
        
      </div>
    </div>
  )
}