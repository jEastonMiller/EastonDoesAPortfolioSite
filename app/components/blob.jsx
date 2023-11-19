'use client'

import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import { useState, useEffect } from 'react';
import { compile } from 'sass';


const inter = Inter({ subsets: ['latin'] });

export default function Blob(
  { 
    color, 
    size, 
    paths, 
    opacity, 
    floatList, 
    sort, 
    colorSortList,
    gridColumn,
    gridRow,
    sizeMod,
    llOrder,
    sizeOrder,
    compliment
   }) {
  const [path, setPath] = useState(null);
  const [position, setPosition] = useState(null);
  const [positionAtt, setPositionAtt] = useState('absolute');
  const [itemOrder, setItemOrder] = useState('');
  const [prevSort, setPrevSort] = useState(null);
  const [nodeColor, setNodeColor] = useState(color);
  const [happyPath, setHappyPath] = useState(false)

  

  const  handlePathMorph= function() {
    setTimeout(() => {
      setPath(paths[1]);
      setPosition(floatList[1]);
    }, 0)
  };

  useEffect(() => {
    setHappyPath(true);
    const revertPath = setTimeout(() => setHappyPath(false), 3000)
  }, [compliment])

  useEffect(() => {
    if(sort === 'color') {
      setPosition(colorSortList[0])
      setPositionAtt('Absolute')
    };
    if(sort === 'bst') {
      setPosition({top: 0, left: 0});
      setTimeout(() => setPosition({top: 0, left: 0}), 0)
      setPositionAtt('');
    }
    if(sort === null) {
      setPosition(paths[0]);
      setPositionAtt('Absolute');
    }
    if(sort === 'll') {
      setPosition({top: 0, left: 0});
      setTimeout(() => setPosition({top: 0, left: 0}), 0)
      setPositionAtt('');
      setItemOrder(llOrder);
    }
    if(sort === 'size') {
      setPosition({top: 0, left: 0});
      setTimeout(() => setPosition({top: 0, left: 0}), 0)
      setPositionAtt('');
      setItemOrder(sizeOrder);
    }
  }, [sort])

  useEffect(() => {
    // if(path === happyPath) setPath(paths[0])
    const morphPath = setTimeout(() => {
      // console.log('hello from morphPath');
      let pathIndex = paths.indexOf(path);
      pathIndex + 1 === paths.length ? setPath(paths[0]) : setPath(paths[pathIndex + 1]);
    }, Math.floor(Math.random() * 500) + 7500)
  }, [path])

  useEffect(() => {
    let positionList;
    if (sort === null) {
      positionList = floatList;
      if (prevSort === sort) setPosition(positionList[0]);
    }
    if (sort === 'color') {
      positionList = colorSortList;
      if (prevSort === sort) setPosition(positionList[0])
    }
    setPrevSort('sort');
    if (sort === 'bst' || sort === 'll' || sort === 'size' ) {
      setTimeout(() => setPosition({top: 0, left: 0}), 1000)
    } else if (sort !== prevSort){
      const morphPosition = setTimeout(() => {
        // console.log('hello from morphPosition');
        const positionIndex = positionList.indexOf(position);
        positionIndex + 1 === positionList.length ? setPosition(positionList[0]) : setPosition(positionList[positionIndex + 1]);
      }, Math.floor(Math.random() * 500) + 3000)

    }

  }, [position])

  useEffect(() => {
    setPath(paths[0]);
    // if(sort !== 'll' ) setPosition(floatList[0]);
    // if (sort === 'll') {
    //   setPosition({top: 0, left: 0})
    //   setPositionAtt('')
    // }
    //handlePathMorph();

  }, [])

  if (path && !happyPath) {
    return (
    <div
      className={styles.nodeContainer}
      style={
        {
          height: `calc((${size} / 13 * 1em) * ${sizeMod})`,
          width: `calc((${size} / 13 * 1em) * ${sizeMod})`,
          gridColumn: gridColumn,
          gridRow: gridRow,
          position: positionAtt,
          top: position.top,
          left: position.left,
          opacity: opacity,
          transition: '3s',
          order: itemOrder
        }
      }
    >
      <svg 
        className={styles.node} 
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"

      >
        <g>
        <path 
          fill={nodeColor}
          stroke={nodeColor}
          height='auto'
          width='auto'
          d={path}
          opacity={opacity}
          style={{
            transition: "8s",
            // animation: "ease-in-out"
          }}
          />
        </g>
 
      </svg>
    </div>
  )
  } else if (compliment !== null) {
    return (
      <div
        className={styles.nodeContainer}
        style={
          {
            height: `calc((${size} / 13 * 1em) * ${sizeMod})`,
            width: `calc((${size} / 13 * 1em) * ${sizeMod})`,
            gridColumn: gridColumn,
            gridRow: gridRow,
            position: positionAtt,
            top: position.top,
            left: position.left,
            opacity: opacity,
            transition: '3s',
            order: itemOrder
          }
        }
      >
        <svg 
          className={styles.node} 
          viewBox={`0 0 ${1000} ${1075}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path 
              fill={nodeColor}
              stroke={nodeColor}
              height={`${sizeMod}em`}
              width={`${sizeMod}em`}
              opacity={opacity}
              style={{
                transition: "8s",
                // animation: "ease-in-out"
              }}
              d="M401.171,68.83C356.785,24.444,297.771,0,235,0S113.216,24.444,68.83,68.83C24.445,113.215,0,172.229,0,235
              s24.444,121.785,68.83,166.17C113.216,445.556,172.229,470,235,470s121.785-24.444,166.17-68.83
              C445.555,356.785,470,297.771,470,235S445.555,113.215,401.171,68.83z M235,455c-121.309,0-220-98.691-220-220S113.692,15,235,15
              c121.308,0,220,98.691,220,220S356.308,455,235,455z"/>
            <path 
              fill={nodeColor}
              stroke={nodeColor}
              height={`${sizeMod}em`}
              width={`${sizeMod}em`}
              opacity={opacity}
              style={{
                transition: "8s",
                // animation: "ease-in-out"
              }}
              d="M331.281,289.837c-3.433-2.321-8.095-1.419-10.414,2.012c-19.355,28.625-51.455,45.715-85.866,45.715
              c-34.412,0-66.512-17.09-85.868-45.717c-2.319-3.43-6.982-4.332-10.414-2.012c-3.431,2.32-4.332,6.982-2.012,10.414
              c22.149,32.757,58.894,52.314,98.293,52.314c39.398,0,76.144-19.556,98.292-52.313
              C335.613,296.819,334.713,292.157,331.281,289.837z"/>
            <path 
              fill={nodeColor}
              stroke={nodeColor}
              height={`${sizeMod}em`}
              width={`${sizeMod}em`}
              opacity={opacity}
              style={{
                transition: "8s",
                // animation: "ease-in-out"
              }}
              d="M327.08,166.45c-20.678,0-37.5,16.822-37.5,37.5c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5
              c0-12.407,10.094-22.5,22.5-22.5s22.5,10.093,22.5,22.5c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5
              C364.58,183.272,347.758,166.45,327.08,166.45z"/>
            <path 
              fill={nodeColor}
              stroke={nodeColor}
              height={`${sizeMod}em`}
              width={`${sizeMod}em`}
              opacity={opacity}
              style={{
                transition: "8s",
                // animation: "ease-in-out"
              }}
              d="M165.42,203.95c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5c0-20.678-16.822-37.5-37.5-37.5s-37.5,16.822-37.5,37.5
              c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5c0-12.407,10.093-22.5,22.5-22.5S165.42,191.543,165.42,203.95z"/>
            <path 
              fill={nodeColor}
              stroke={nodeColor}
              height={`${sizeMod}em`}
              width={`${sizeMod}em`}
              opacity={opacity}
              style={{
                transition: "8s",
                // animation: "ease-in-out"
              }}
              d="M250,367.563h-30c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h30c4.143,0,7.5-3.358,7.5-7.5S254.142,367.563,250,367.563
              z"/>
            <path 
              fill={nodeColor}
              stroke={nodeColor}
              height={`${sizeMod}em`}
              width={`${sizeMod}em`}
              opacity={opacity}
              style={{
                transition: "8s",
                // animation: "ease-in-out"
              }}
              d="M95.5,245.154c-4.142,0-7.5,3.358-7.5,7.5c0,5.514-4.486,10-10,10s-10-4.486-10-10s4.486-10,10-10
              c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5c-13.785,0-25,11.215-25,25s11.215,25,25,25s25-11.215,25-25
              C103,248.512,99.642,245.154,95.5,245.154z"/>
            <path 
              fill={nodeColor}
              stroke={nodeColor}
              height={`${sizeMod}em`}
              width={`${sizeMod}em`}
              opacity={opacity}
              style={{
                transition: "8s",
                // animation: "ease-in-out"
              }}
              d="M409.5,245.154c-4.143,0-7.5,3.358-7.5,7.5c0,5.514-4.486,10-10,10s-10-4.486-10-10s4.486-10,10-10
              c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5c-13.785,0-25,11.215-25,25s11.215,25,25,25s25-11.215,25-25
              C417,248.512,413.642,245.154,409.5,245.154z"/>
          </g>
        </svg>
      </div>

    )
  } else {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: "translateX(25%) translateY(15%)"
        }}
      >
        <div
          className={styles.nodeLoader}
          
        >Lodading Blobs</div>

        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox={`0 0 1000 1000`} 
          width="100%"
          id="blobSvg" 
          filter="blur(8.8px)" 
        >                        
          <defs>                        
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            
            <stop offset="0%" 
            style={{
              stopColor: color
            }}></stop>                            
            <stop offset="0%" 
            style={{
              stopColor: color
            }}></stop>                          
            </linearGradient>                        
          </defs>                                            
          <path id="blob" fill="url(#gradient)" >
            <animate attributeName="d" dur="10.2s" repeatCount="indefinite" values="M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z">
            </animate>
          </path>
          <path id="blob" fill="url(#gradient)" >
            <animate attributeName="d" dur="10.2s" repeatCount="indefinite" values="M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z">
            </animate>
          </path>
          <path id="blob" fill="url(#gradient)" >
            <animate attributeName="d" dur="10.2s" repeatCount="indefinite" values="M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z">
            </animate>
          </path>
          <path id="blob" fill="url(#gradient)" >
            <animate attributeName="d" dur="10.2s" repeatCount="indefinite" values="M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z">
            </animate>
          </path>
        </svg>
      </div>
    )
  }

  
}