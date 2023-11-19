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
  const [linkedList, setLinkedList] = useState({});
  const [bst, setBST] = useState({});
  const [sort, setSort] = useState(null);
  const [sizeCache, setSizeCache] = useState([]);
  const [bstDepth, setBSTDepth] = useState(0);
  const [gridColumnString, setGridColumnString] = useState('');
  const [gridRowString, setGridRowString] = useState('');
  const [display, setDisplay] = useState('');
  const [sizeMod, setSizeMod] = useState(1.0);
  const [compliment, setCompliment] = useState(null)

  // generate balanced bst
  function handleGenerateBalancedBST(arr) {
    if (!arr.length) return null;
    let mid = Math.floor(arr.length / 2);
    let root = {
      data: arr[mid],
    };
    root.left = handleGenerateBalancedBST(arr.slice(0,mid));
    root.right = handleGenerateBalancedBST(arr.slice(mid+1));
    return root;
  }

  // assign column and row coords
  const handleCoordAssignment = (current, gridRowAssignment = 2, gridColumnAssignment = {value: 1}) => {
    if (!current) return;
    current.data.gridRow = gridRowAssignment
    let depth = gridRowAssignment + 2;
    handleCoordAssignment(current.left, depth, gridColumnAssignment);
    current.data.gridColumn = gridColumnAssignment.value;
    gridColumnAssignment.value += 1;
    handleCoordAssignment(current.right, depth, gridColumnAssignment);
    let treeHeight = depth / 2;
    setBSTDepth(treeHeight);
  }

  const handleGridStyling = () => {
    const width =  2 ** (bstDepth - 1);
    const numColumns = (2 * width) + 1;
    const numRows = (2 * bstDepth) + 1;

    if(sort === 'bst') {
      if (numColumns <= 10)setSizeMod(numColumns / 25);
      else if (bstDepth > 10 && bstDepth <= 13)setSizeMod(numColumns / 50);
      else setSizeMod(numColumns/60)
    }
    let colStr = `auto repeat(${(numColumns - 1) / 2}, ${(numColumns - 1) / 2}% auto)`;
    let rowStr = 'auto';
    
    for (let i = 1; i <= numRows; i++) {
      if (i % 2 !== 0) rowStr = rowStr + `${100 / numColumns}% `
      else rowStr = rowStr + `auto `
    };

    setGridColumnString(colStr);
    setGridRowString(rowStr);
  }

  const handleCreateNode = (sizeList) => {
    const color = colors[Math.floor(Math.random() * colors.length)];

    let size = Math.floor(Math.random() * 100) + 100
    while (sizeList.includes(size)) size = Math.floor(Math.random() * 100) + 100;
    sizeList.push(size);

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
    
        if (Math.random() < 0.5) position.left = `${parseInt(prevPoint.left) + randFloatPosition(2, 0)}%`;
        else position.left = `${parseInt(prevPoint.left) - randFloatPosition(2, 0)}%`;
        
        if (Math.random() < 0.5) position.top = `${parseInt(prevPoint.top) + randFloatPosition(2, 0)}%`
        else position.top = `${parseInt(prevPoint.top) - randFloatPosition(2, 0)}%` 
        
        list.push(position);
      }
    }
    
    // generate random float positions for color sort and basic float
    generateFloatList(floatPositions);
    generateFloatList(colorSortCoords);

    let node = {
      color: color,
      size: size,
      growth: growth,
      edges: edges,
      paths: [],
      opacity: opacity,
      positionX: null,
      positionY: null,
      floatList: floatPositions,
      colorSortList: colorSortCoords,
      value: size,
      gridColumn: null,
      gridRow: null,
      llOrder: null,
      sizeOrder: null
    }

    //generate random path loop
    for (let i = 0; i < 15; i++) {
      const { path } = blobshape({ size: size, growth: growth, edges: edges, seed: null })
      node.paths.push(path);
    }

    return node;
  }
  
  const handleAddNode = () => {
    const newNodes = JSON.parse(JSON.stringify(nodes));
    const newSizeCache = JSON.parse(JSON.stringify(sizeCache));
    let addedNode = handleCreateNode(newSizeCache);
    newNodes.push(addedNode);

    newNodes.sort((a, b) => a.size - b.size)
    for (let i = 0; i < newNodes.length; i++) newNodes[i].sizeOrder = i

    const newBST = {
      root: null
    }

    // generate and balance new bst after insertion and assign coords
    newBST.root = handleGenerateBalancedBST(newNodes);
    handleCoordAssignment(newBST.root);

    // add to linked list
    const newLinkedList = JSON.parse(JSON.stringify(linkedList));
    addedNode.llOrder = newSizeCache.length;
    let newLLNode = {
      data: addedNode,
      next: null
    }

    if (!newLinkedList.head) {
      newLinkedList.head = newLLNode;
      newLinkedList.tail = newLLNode;
    } else {
      newLinkedList.tail.next = newLLNode;
      newLinkedList.tail = newLLNode;
    }

    setSizeCache(newSizeCache);
    setLinkedList(newLinkedList);
    setBST(newBST);

    newNodes.sort((a, b) => a.llOrder - b.llOrder)
    setNodes(newNodes);
  }


  const handleDeleteNode = () => {
    const newNodes = JSON.parse(JSON.stringify(nodes));
    const newSizeCache = JSON.parse(JSON.stringify(sizeCache));
    newNodes.pop();
    
    newNodes.sort((a, b) => a.size - b.size)
    for (let i = 0; i < newNodes.length; i++) newNodes[i].sizeOrder = i

    const newBST = {
      root: null
    }

    // generate and balance new bst after insertion and assign coords
    newBST.root = handleGenerateBalancedBST(newNodes);
    handleCoordAssignment(newBST.root);

    // delete tail from  linked list
    const newLinkedList = JSON.parse(JSON.stringify(linkedList));
    let curr = newLinkedList.head;
    while (curr.next !== null ) {
      if (curr.next === newLinkedList.tail) {
        newLinkedList.tail = curr;
        curr.next = null;
        break;
      }
      curr = curr.next;
    }

    setSizeCache(newSizeCache);
    setLinkedList(newLinkedList);
    setBST(newBST);

    newNodes.sort((a, b) => a.llOrder - b.llOrder)
    setNodes(newNodes);
  }

  useEffect(() => {
    const nodeList = [];

    const linkedListInit = {
      head: null,
      tail: null
    }

    let llIndex = 1;

    const bstInit = {
      root: null
    }

    const sizeCacheInit = [];

    // generate nodes 
    for (let i = 0; i < 14; i++) {
      let newNode = handleCreateNode(sizeCacheInit);
      nodeList.push(newNode);

      // add node to linkedListInit
      let llNode = {
        data: newNode,
        next: null
      }

      llNode.data.llOrder = llIndex;
      llIndex+= 1;

      if (!linkedListInit.head) {
        linkedListInit.head = llNode;
        linkedListInit.tail = llNode;
      } else {
        linkedListInit.tail.next = llNode;
        linkedListInit.tail = llNode;
      }
    }

    nodeList.sort((a, b) => a.size - b.size)
    for (let i = 0; i < nodeList.length; i++) nodeList[i].sizeOrder = i

    bstInit.root = handleGenerateBalancedBST(nodeList);

    handleCoordAssignment(bstInit.root);
    setSizeCache(sizeCacheInit);
    setLinkedList(linkedListInit);
    setBST(bstInit);

    nodeList.sort((a, b) => a.llOrder - b.llOrder)
    setNodes(nodeList);

    handleGridStyling();
  }, [])


  useEffect(() => {
    handleGridStyling()
  }, [nodes, display])

  useEffect(() => {
    switch (sort) {
      case null:
        setDisplay('');
        setSizeMod(1.0);
        break;
      case 'bst':
        setDisplay('grid');
        break;
      case 'll':
        setDisplay('flex');
        if (nodes.length < 5) setSizeMod( 6 / nodes.length)
        else if (nodes.length < 10) setSizeMod( 8 / nodes.length)
        else setSizeMod( 10 / nodes.length)
        break;
      case 'color':
        setDisplay('');
        setSizeMod(1.0);
        break;
      case 'size':
        setDisplay('flex');
        if (nodes.length < 5) setSizeMod( 6 / nodes.length)
        else if (nodes.length < 10) setSizeMod( 8 / nodes.length)
        else setSizeMod( 10 / nodes.length)
        break;
      default:
        break;
    }
  }, [sort])

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
        Change how the nodes are sorted</p>
      <div
        className={styles.controlBox}
      >
        <div
          className={styles.action}
        >
          {nodes.length < 40 ? <button
            onClick={() => {
              handleAddNode()
              if (sort === 'll' || sort === 'size') {
                if (nodes.length < 5) setSizeMod( 6 / nodes.length)
                else if (nodes.length < 10) setSizeMod( 8 / nodes.length)
                else setSizeMod( 10 / nodes.length)
              }
            } }
          >ADD node</button> :
          <button
            disabled
          >ADD node</button>}
          {nodes.length > 0 ? <button
            onClick={() => {
              handleDeleteNode();
              if (sort === 'll' || sort === 'size') {
                if (nodes.length < 5) setSizeMod( 6 / nodes.length)
                else if (nodes.length < 10) setSizeMod( 8 / nodes.length)
                else setSizeMod( 10 / nodes.length)
              }
            }}
          >delete NODE</button> :
          <button
            disabled
          >delete NODE</button>}
          <button
            onClick={() => {
              if (compliment === null) setCompliment(true)
              else setCompliment(!compliment)
            }}
          >TELL NODE IT LOOKS pretty</button>
        </div>
        <div
          className={styles.category}
        >
          <p>view</p>
          <button
            onClick={() => {
              setSort(null);
              
            }}
          >UNSORT</button>
          <button
            onClick={() => {
              setSort('bst');
            }}
          >BST</button>
          <button
            onClick={() => {
              setSort('ll');
              setSizeMod( 10 / nodes.length)
            }}
          >LINKED LIST</button>
          <button
            onClick={() => {
              setSort('color');

            }}
          >COLOR</button>
          <button
            onClick={() => {
              setSort('size');
              setSizeMod( 10 / nodes.length)
            }}
          >SIZE</button>
        </div>
      </div>

      <div
        className={styles.playground}
        style={
          {
            display: display,
            gridTemplateColumns: gridColumnString,
            gridTemplateRows: gridRowString,
            flexWrap: 'wrap',
            overflow: 'none'
          }
        }
      >
       {nodes.map((element, index) => (
       <Blob 
        color={element.color} 
        size={element.size} 
        paths={element.paths}
        floatList={element.floatList}
        opacity={element.opacity}
        sort={sort}
        colorSortList={element.colorSortList}
        gridColumn={element.gridColumn}
        gridRow={element.gridRow}
        sizeMod={sizeMod}
        llOrder={element.llOrder}
        sizeOrder={element.sizeOrder}
        compliment={compliment}
        key={index}
        />
        ))}
        
      </div>
    </div>
  )
}