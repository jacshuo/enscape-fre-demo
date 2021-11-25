/* eslint-disable */
// @ts-nocheck
import React from 'react';
import * as echarts from 'echarts';
import ShowBox from '../components/ShowBox';

const Home: React.FunctionComponent = () => {
  const option1 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };
  const option2 = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    // title: {
    //   text: 'Gradient Stacked Area Chart',
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(128, 255, 165)',
            },
            {
              offset: 1,
              color: 'rgba(1, 191, 236)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0, 221, 255)',
            },
            {
              offset: 1,
              color: 'rgba(77, 119, 255)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(55, 162, 255)',
            },
            {
              offset: 1,
              color: 'rgba(116, 21, 219)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 0, 135)',
            },
            {
              offset: 1,
              color: 'rgba(135, 0, 157)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 402, 231, 134, 190, 230, 120],
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 191, 0)',
            },
            {
              offset: 1,
              color: 'rgba(224, 62, 76)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 302, 181, 234, 210, 290, 150],
      },
    ],
  };
  const option3 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  };
  const option4 = {
    title: [
      {
        text: 'Tangential Polar Bar Label Position (middle)',
      },
    ],
    polar: {
      radius: [30, '80%'],
    },
    angleAxis: {
      max: 4,
      startAngle: 75,
    },
    radiusAxis: {
      type: 'category',
      data: ['a', 'b', 'c', 'd'],
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        formatter: '{b}: {c}',
      },
    },
  };
  const option5 = {
    angleAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    radiusAxis: {},
    polar: {},
    series: [
      {
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        emphasis: {
          focus: 'series',
        },
      },
      {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a',
        emphasis: {
          focus: 'series',
        },
      },
      {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
        emphasis: {
          focus: 'series',
        },
      },
    ],
    legend: {
      show: true,
      data: ['A', 'B', 'C'],
    },
  };
  const option6 = {
    title: {
      text: 'Male and female height and weight distribution',
      subtext: 'Data from: Heinz 2003',
    },
    grid: {
      left: '3%',
      right: '7%',
      bottom: '7%',
      containLabel: true,
    },
    tooltip: {
      // trigger: 'axis',
      showDelay: 0,
      formatter(params) {
        if (params.value.length > 1) {
          return `${params.seriesName} :<br/>${params.value[0]}cm ${params.value[1]}kg `;
        }
        return `${params.seriesName} :<br/>${params.name} : ${params.value}kg `;
      },
      axisPointer: {
        show: true,
        type: 'cross',
        lineStyle: {
          type: 'dashed',
          width: 1,
        },
      },
    },
    toolbox: {
      feature: {
        dataZoom: {},
        brush: {
          type: ['rect', 'polygon', 'clear'],
        },
      },
    },
    brush: {},
    legend: {
      data: ['Female', 'Male'],
      left: 'center',
      bottom: 10,
    },
    xAxis: [
      {
        type: 'value',
        scale: true,
        axisLabel: {
          formatter: '{value} cm',
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        axisLabel: {
          formatter: '{value} kg',
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: 'Female',
        type: 'scatter',
        emphasis: {
          focus: 'series',
        },
        // prettier-ignore
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
          [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
          [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
          [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
          [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
          [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
          [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
          [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
          [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
          [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
          [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
          [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
          [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
          [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
          [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
          [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
          [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
          [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
          [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
          [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
          [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
          [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
          [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
          [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
          [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
          [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
          [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
          [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
          [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
          [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
          [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
          [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
          [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
          [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
          [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
          [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
          [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
          [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
          [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
          [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
          [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
          [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
          [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
          [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
          [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
          [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
          [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
          [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
          [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
          [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
          [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
          [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
        ],
        markArea: {
          silent: true,
          itemStyle: {
            color: 'transparent',
            borderWidth: 1,
            borderType: 'dashed',
          },
          data: [
            [
              {
                name: 'Female Data Range',
                xAxis: 'min',
                yAxis: 'min',
              },
              {
                xAxis: 'max',
                yAxis: 'max',
              },
            ],
          ],
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          lineStyle: {
            type: 'solid',
          },
          data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }],
        },
      },
      {
        name: 'Male',
        type: 'scatter',
        emphasis: {
          focus: 'series',
        },
        // prettier-ignore
        data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
          [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
          [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
          [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
          [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
          [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
          [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
          [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
          [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
          [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
          [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
          [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
          [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
          [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
          [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
          [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
          [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
          [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
          [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
          [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
          [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
          [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
          [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
          [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
          [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
          [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
          [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
          [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
          [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
          [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
          [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
          [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
          [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
          [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
          [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
          [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
          [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
          [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
          [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
          [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
          [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
          [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
          [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
          [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
          [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
          [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
          [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
          [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
          [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
          [180.3, 83.2], [180.3, 83.2]
        ],
        markArea: {
          silent: true,
          itemStyle: {
            color: 'transparent',
            borderWidth: 1,
            borderType: 'dashed',
          },
          data: [
            [
              {
                name: 'Male Data Range',
                xAxis: 'min',
                yAxis: 'min',
              },
              {
                xAxis: 'max',
                yAxis: 'max',
              },
            ],
          ],
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          lineStyle: {
            type: 'solid',
          },
          data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }],
        },
      },
    ],
  };
  const dataBJ = [
    [55, 9, 56, 0.46, 18, 6, 1],
    [25, 11, 21, 0.65, 34, 9, 2],
    [56, 7, 63, 0.3, 14, 5, 3],
    [33, 7, 29, 0.33, 16, 6, 4],
    [42, 24, 44, 0.76, 40, 16, 5],
    [82, 58, 90, 1.77, 68, 33, 6],
    [74, 49, 77, 1.46, 48, 27, 7],
    [78, 55, 80, 1.29, 59, 29, 8],
    [267, 216, 280, 4.8, 108, 64, 9],
    [185, 127, 216, 2.52, 61, 27, 10],
    [39, 19, 38, 0.57, 31, 15, 11],
    [41, 11, 40, 0.43, 21, 7, 12],
    [64, 38, 74, 1.04, 46, 22, 13],
    [108, 79, 120, 1.7, 75, 41, 14],
    [108, 63, 116, 1.48, 44, 26, 15],
    [33, 6, 29, 0.34, 13, 5, 16],
    [94, 66, 110, 1.54, 62, 31, 17],
    [186, 142, 192, 3.88, 93, 79, 18],
    [57, 31, 54, 0.96, 32, 14, 19],
    [22, 8, 17, 0.48, 23, 10, 20],
    [39, 15, 36, 0.61, 29, 13, 21],
    [94, 69, 114, 2.08, 73, 39, 22],
    [99, 73, 110, 2.43, 76, 48, 23],
    [31, 12, 30, 0.5, 32, 16, 24],
    [42, 27, 43, 1, 53, 22, 25],
    [154, 117, 157, 3.05, 92, 58, 26],
    [234, 185, 230, 4.09, 123, 69, 27],
    [160, 120, 186, 2.77, 91, 50, 28],
    [134, 96, 165, 2.76, 83, 41, 29],
    [52, 24, 60, 1.03, 50, 21, 30],
    [46, 5, 49, 0.28, 10, 6, 31],
  ];
  const dataGZ = [
    [26, 37, 27, 1.163, 27, 13, 1],
    [85, 62, 71, 1.195, 60, 8, 2],
    [78, 38, 74, 1.363, 37, 7, 3],
    [21, 21, 36, 0.634, 40, 9, 4],
    [41, 42, 46, 0.915, 81, 13, 5],
    [56, 52, 69, 1.067, 92, 16, 6],
    [64, 30, 28, 0.924, 51, 2, 7],
    [55, 48, 74, 1.236, 75, 26, 8],
    [76, 85, 113, 1.237, 114, 27, 9],
    [91, 81, 104, 1.041, 56, 40, 10],
    [84, 39, 60, 0.964, 25, 11, 11],
    [64, 51, 101, 0.862, 58, 23, 12],
    [70, 69, 120, 1.198, 65, 36, 13],
    [77, 105, 178, 2.549, 64, 16, 14],
    [109, 68, 87, 0.996, 74, 29, 15],
    [73, 68, 97, 0.905, 51, 34, 16],
    [54, 27, 47, 0.592, 53, 12, 17],
    [51, 61, 97, 0.811, 65, 19, 18],
    [91, 71, 121, 1.374, 43, 18, 19],
    [73, 102, 182, 2.787, 44, 19, 20],
    [73, 50, 76, 0.717, 31, 20, 21],
    [84, 94, 140, 2.238, 68, 18, 22],
    [93, 77, 104, 1.165, 53, 7, 23],
    [99, 130, 227, 3.97, 55, 15, 24],
    [146, 84, 139, 1.094, 40, 17, 25],
    [113, 108, 137, 1.481, 48, 15, 26],
    [81, 48, 62, 1.619, 26, 3, 27],
    [56, 48, 68, 1.336, 37, 9, 28],
    [82, 92, 174, 3.29, 0, 13, 29],
    [106, 116, 188, 3.628, 101, 16, 30],
    [118, 50, 0, 1.383, 76, 11, 31],
  ];
  const dataSH = [
    [91, 45, 125, 0.82, 34, 23, 1],
    [65, 27, 78, 0.86, 45, 29, 2],
    [83, 60, 84, 1.09, 73, 27, 3],
    [109, 81, 121, 1.28, 68, 51, 4],
    [106, 77, 114, 1.07, 55, 51, 5],
    [109, 81, 121, 1.28, 68, 51, 6],
    [106, 77, 114, 1.07, 55, 51, 7],
    [89, 65, 78, 0.86, 51, 26, 8],
    [53, 33, 47, 0.64, 50, 17, 9],
    [80, 55, 80, 1.01, 75, 24, 10],
    [117, 81, 124, 1.03, 45, 24, 11],
    [99, 71, 142, 1.1, 62, 42, 12],
    [95, 69, 130, 1.28, 74, 50, 13],
    [116, 87, 131, 1.47, 84, 40, 14],
    [108, 80, 121, 1.3, 85, 37, 15],
    [134, 83, 167, 1.16, 57, 43, 16],
    [79, 43, 107, 1.05, 59, 37, 17],
    [71, 46, 89, 0.86, 64, 25, 18],
    [97, 71, 113, 1.17, 88, 31, 19],
    [84, 57, 91, 0.85, 55, 31, 20],
    [87, 63, 101, 0.9, 56, 41, 21],
    [104, 77, 119, 1.09, 73, 48, 22],
    [87, 62, 100, 1, 72, 28, 23],
    [168, 128, 172, 1.49, 97, 56, 24],
    [65, 45, 51, 0.74, 39, 17, 25],
    [39, 24, 38, 0.61, 47, 17, 26],
    [39, 24, 39, 0.59, 50, 19, 27],
    [93, 68, 96, 1.05, 79, 29, 28],
    [188, 143, 197, 1.66, 99, 51, 29],
    [174, 131, 174, 1.55, 108, 50, 30],
    [187, 143, 201, 1.39, 89, 53, 31],
  ];
  const lineStyle = {
    width: 1,
    opacity: 0.5,
  };
  const option7 = {
    backgroundColor: '#161627',
    title: {
      text: 'AQI - Radar',
      left: 'center',
      textStyle: {
        color: '#eee',
      },
    },
    legend: {
      bottom: 5,
      data: ['Beijing', 'Shanghai', 'Guangzhou'],
      itemGap: 20,
      textStyle: {
        color: '#fff',
        fontSize: 14,
      },
      selectedMode: 'single',
    },
    radar: {
      indicator: [
        { name: 'AQI', max: 300 },
        { name: 'PM2.5', max: 250 },
        { name: 'PM10', max: 300 },
        { name: 'CO', max: 5 },
        { name: 'NO2', max: 200 },
        { name: 'SO2', max: 100 },
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: 'rgb(238, 197, 102)',
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)',
            'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)',
            'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)',
            'rgba(238, 197, 102, 1)',
          ].reverse(),
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)',
        },
      },
    },
    series: [
      {
        name: 'Beijing',
        type: 'radar',
        lineStyle,
        data: dataBJ,
        symbol: 'none',
        itemStyle: {
          color: '#F9713C',
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: 'Shanghai',
        type: 'radar',
        lineStyle,
        data: dataSH,
        symbol: 'none',
        itemStyle: {
          color: '#B3E4A1',
        },
        areaStyle: {
          opacity: 0.05,
        },
      },
      {
        name: 'Guangzhou',
        type: 'radar',
        lineStyle,
        data: dataGZ,
        symbol: 'none',
        itemStyle: {
          color: 'rgb(238, 197, 102)',
        },
        areaStyle: {
          opacity: 0.05,
        },
      },
    ],
  };
  // prettier-ignore
  const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
  ];
  // prettier-ignore
  const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
  ];
  // prettier-ignore
  const data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
  .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });
  const option8 = {
    tooltip: {
      position: 'top',
    },
    grid: {
      height: '50%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true,
      },
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
    },
    series: [
      {
        name: 'Punch Card',
        type: 'heatmap',
        data,
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
  const bgColor = '#2E2733';
  const itemStyle = {
    star5: {
      color: colors[0],
    },
    star4: {
      color: colors[1],
    },
    star3: {
      color: colors[2],
    },
    star2: {
      color: colors[3],
    },
  };
  const data1 = [
    {
      name: '虚构',
      itemStyle: {
        color: colors[1],
      },
      children: [
        {
          name: '小说',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '疼',
                },
                {
                  name: '慈悲',
                },
                {
                  name: '楼下的房客',
                },
              ],
            },
            {
              name: '4☆',
              children: [
                {
                  name: '虚无的十字架',
                },
                {
                  name: '无声告白',
                },
                {
                  name: '童年的终结',
                },
              ],
            },
            {
              name: '3☆',
              children: [
                {
                  name: '疯癫老人日记',
                },
              ],
            },
          ],
        },
        {
          name: '其他',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '纳博科夫短篇小说全集',
                },
              ],
            },
            {
              name: '4☆',
              children: [
                {
                  name: '安魂曲',
                },
                {
                  name: '人生拼图版',
                },
              ],
            },
            {
              name: '3☆',
              children: [
                {
                  name: '比起爱你，我更需要你',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: '非虚构',
      itemStyle: {
        color: colors[2],
      },
      children: [
        {
          name: '设计',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '无界面交互',
                },
              ],
            },
            {
              name: '4☆',
              children: [
                {
                  name: '数字绘图的光照与渲染技术',
                },
                {
                  name: '日本建筑解剖书',
                },
              ],
            },
            {
              name: '3☆',
              children: [
                {
                  name: '奇幻世界艺术\n&RPG地图绘制讲座',
                },
              ],
            },
          ],
        },
        {
          name: '社科',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '痛点',
                },
              ],
            },
            {
              name: '4☆',
              children: [
                {
                  name: '卓有成效的管理者',
                },
                {
                  name: '进化',
                },
                {
                  name: '后物欲时代的来临',
                },
              ],
            },
            {
              name: '3☆',
              children: [
                {
                  name: '疯癫与文明',
                },
              ],
            },
          ],
        },
        {
          name: '心理',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '我们时代的神经症人格',
                },
              ],
            },
            {
              name: '4☆',
              children: [
                {
                  name: '皮格马利翁效应',
                },
                {
                  name: '受伤的人',
                },
              ],
            },
            {
              name: '3☆',
            },
            {
              name: '2☆',
              children: [
                {
                  name: '迷恋',
                },
              ],
            },
          ],
        },
        {
          name: '居家',
          children: [
            {
              name: '4☆',
              children: [
                {
                  name: '把房子住成家',
                },
                {
                  name: '只过必要生活',
                },
                {
                  name: '北欧简约风格',
                },
              ],
            },
          ],
        },
        {
          name: '绘本',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '设计诗',
                },
              ],
            },
            {
              name: '4☆',
              children: [
                {
                  name: '假如生活糊弄了你',
                },
                {
                  name: '博物学家的神秘动物图鉴',
                },
              ],
            },
            {
              name: '3☆',
              children: [
                {
                  name: '方向',
                },
              ],
            },
          ],
        },
        {
          name: '哲学',
          children: [
            {
              name: '4☆',
              children: [
                {
                  name: '人生的智慧',
                },
              ],
            },
          ],
        },
        {
          name: '技术',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '代码整洁之道',
                },
              ],
            },
            {
              name: '4☆',
              children: [
                {
                  name: 'Three.js 开发指南',
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  for (let j = 0; j < data1.length; ++j) {
    const level1 = data1[j].children;
    for (let i = 0; i < level1.length; ++i) {
      const block = level1[i].children;
      const bookScore = [];
      let bookScoreId;
      for (let star = 0; star < block.length; ++star) {
        let style = (function (name) {
          switch (name) {
            case '5☆':
              bookScoreId = 0;
              return itemStyle.star5;
            case '4☆':
              bookScoreId = 1;
              return itemStyle.star4;
            case '3☆':
              bookScoreId = 2;
              return itemStyle.star3;
            case '2☆':
              bookScoreId = 3;
              return itemStyle.star2;
          }
        })(block[star].name);
        block[star].label = {
          color: style.color,
          downplay: {
            opacity: 0.5,
          },
        };
        if (block[star].children) {
          style = {
            opacity: 1,
            color: style.color,
          };
          block[star].children.forEach(function (book) {
            book.value = 1;
            book.itemStyle = style;
            book.label = {
              color: style.color,
            };
            let value = 1;
            if (bookScoreId === 0 || bookScoreId === 3) {
              value = 5;
            }
            if (bookScore[bookScoreId]) {
              bookScore[bookScoreId].value += value;
            } else {
              bookScore[bookScoreId] = {
                // @ts-ignore
                color: colors[bookScoreId],
                // @ts-ignore
                value,
              };
            }
          });
        }
      }
      // @ts-ignore
      level1[i].itemStyle = {
        color: data1[j].itemStyle.color,
      };
    }
  }
  const option9 = {
    backgroundColor: bgColor,
    color: colors,
    series: [
      {
        type: 'sunburst',
        center: ['50%', '48%'],
        data: data1,
        sort(a, b) {
          if (a.depth === 1) {
            return b.getValue() - a.getValue();
          }
          return a.dataIndex - b.dataIndex;
        },
        label: {
          rotate: 'radial',
          color: bgColor,
        },
        itemStyle: {
          borderColor: bgColor,
          borderWidth: 2,
        },
        levels: [
          {},
          {
            r0: 0,
            r: 40,
            label: {
              rotate: 0,
            },
          },
          {
            r0: 40,
            r: 105,
          },
          {
            r0: 115,
            r: 140,
            itemStyle: {
              shadowBlur: 2,
              shadowColor: colors[2],
              color: 'transparent',
            },
            label: {
              rotate: 'tangential',
              fontSize: 10,
              color: colors[0],
            },
          },
          {
            r0: 140,
            r: 145,
            itemStyle: {
              shadowBlur: 80,
              shadowColor: colors[0],
            },
            label: {
              position: 'outside',
              textShadowBlur: 5,
              textShadowColor: '#333',
            },
            downplay: {
              label: {
                opacity: 0.5,
              },
            },
          },
        ],
      },
    ],
  };
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ShowBox options={option1} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option2} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option3} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option4} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option5} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option6} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option7} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option8} style={{ width: '33.33%', height: 400 }} />
        <ShowBox options={option9} style={{ width: '33.33%', height: 600 }} />
      </div>
    </>
  );
};

export default Home;
