// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { format, subMonths, subDays } from 'date-fns';
// import { RefreshControl } from 'react-native';


// const screenWidth = Dimensions.get('window').width;

// const generateDataFromDate = (startDate, months) => {
//   const data = {
//     labels: [],
//     datasets: [{ data: [0] }],
//   };

//   for (let i = 0; i <= months; i += 3) {
//     const date = subMonths(startDate, i);
//     data.labels.unshift(format(date, 'MMM yyyy'));
//     if (i > 0) {
//       data.datasets[0].data.unshift(Math.floor(Math.random() * 50000) + 20000);
//     }
//   }

//   return data;
// };

// const generateDataForLastWeek = () => {
//   const data = {
//     labels: [],
//     datasets: [{ data: [] }],
//   };
//   for (let i = 6; i >= 0; i--) {
//     const date = subDays(new Date(), i);
//     data.labels.push(format(date, 'EEE'));
//     data.datasets[0].data.push(Math.floor(Math.random() * 5000) + 1000);
//   }
//   return data;
// };

// const generateDataForLastMonth = () => {
//   const data = {
//     labels: [],
//     datasets: [{ data: [] }],
//   };
//   for (let i = 29; i >= 0; i--) {
//     const date = subDays(new Date(), i);
//     if (i % 5 === 0) {
//       data.labels.push(format(date, 'dd MMM'));
//     } else {
//       data.labels.push('');
//     }
//     data.datasets[0].data.push(Math.floor(Math.random() * 10000) + 5000);
//   }
//   return data;
// };

// const chartConfig = {
//   backgroundGradientFrom: '#fff',
//   backgroundGradientTo: '#fff',
//   color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
//   strokeWidth: 2,
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false,
//   decimalPlaces: 0,
//   formatYLabel: (value) => {
//     const formattedValue = Number(value).toLocaleString('en-US');
//     return `KSh ${formattedValue}`;
//   },
//   propsForLabels: {
//     fontSize: 10,
//   },
//   propsForVerticalLabels: {
//     rotation: -45,
//     translateY: 5,
//     translateX: -10,
//   },
// };

// const orders = [
//   { id: 1, customer: 'John Doe', date: '2024-10-01', status: 'Pending', email: 'john.doe@example.com', profileImage: null, amount: 5000 },
//   { id: 2, customer: 'Jane Smith', date: '2024-10-02', status: 'Delivered', email: 'jane.smith@example.com', profileImage: null, amount: 7500 },
//   { id: 3, customer: 'Alice Johnson', date: '2024-10-03', status: 'On Transit', email: 'alice.johnson@example.com', profileImage: null, amount: 3000 },
//   { id: 4, customer: 'Bob Brown', date: '2024-10-04', status: 'Delivered', email: 'bob.brown@example.com', profileImage: null, amount: 6000 },
//   { id: 5, customer: 'Eve Wilson', date: '2024-10-05', status: 'Pending', email: 'eve.wilson@example.com', profileImage: null, amount: 4500 },
// ];

// const getStatusIcon = (status) => {
//   switch (status) {
//     case 'Delivered':
//       return <MaterialIcons name="circle" size={16} color="green" />;
//     case 'Pending':
//       return <MaterialIcons name="circle" size={16} color="red" />;
//     case 'On Transit':
//       return <MaterialIcons name="circle" size={16} color="yellow" />;
//     default:
//       return null;
//   }
// };

// const OrderItem = ({ customer, email, date, status, profileImage, amount }) => (
//   <View style={styles.orderItem}>
//     <Image source={profileImage ? { uri: profileImage } : require('../../assets/images/profile.png')} style={styles.orderProfileImage} />
//     <View style={styles.orderInfo}>
//       <Text style={styles.orderCustomer}>{customer}</Text>
//       <Text style={styles.orderText}>{date}</Text>
//       <Text style={styles.orderText}>{email}</Text>
//       <Text style={styles.orderAmount}>KSh {amount.toLocaleString()}</Text>
//     </View>
//     <View style={styles.statusContainer}>
//       <Text style={styles.statusText}>{status}</Text>
//       {getStatusIcon(status)}
//     </View>
//   </View>
// );

// const SalesDashboard = () => {
//   const [profileImage, setProfileImage] = useState(null);
//   const [chartData, setChartData] = useState(null);
//   const [totalSales, setTotalSales] = useState(0);
//   const [timeFrame, setTimeFrame] = useState('1 Year');
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [totalOrderValue, setTotalOrderValue] = useState(0);

//   useEffect(() => {
//     updateChartData(12);
//     calculateOrderTotals();
//   }, []);

  

//   const calculateOrderTotals = () => {
//     const total = orders.reduce((acc, order) => acc + order.amount, 0);
//     setTotalOrders(orders.length);
//     setTotalOrderValue(total);
//   };

//   const pickImage = async () => {
//     // Image picker logic here
//   };

//   const updateChartData = (timeFrame) => {
//     let data;
//     let total;
//     switch (timeFrame) {
//       case 'week':
//         data = generateDataForLastWeek();
//         setTimeFrame('Last Week');
//         break;
//       case 'month':
//         data = generateDataForLastMonth();
//         setTimeFrame('Last Month');
//         break;
//       default:
//         data = generateDataFromDate(new Date(), 12);
//         setTimeFrame('All Time');
//     }
//     setChartData(data);
//     total = data.datasets[0].data.reduce((a, b) => a + b, 0);
//     setTotalSales(total);
//   };

//   const renderItem = ({ item }) => {
//     switch (item.type) {
//       case 'header':
//         return (
//           <View style={styles.header}>
//             <TouchableOpacity>
//               <Ionicons name="menu" size={24} color="black" />
//             </TouchableOpacity>
//             <Text style={styles.headerTitle}>BREEG</Text>
//             <TouchableOpacity onPress={pickImage}>
//               {profileImage ? (
//                 <Image source={{ uri: profileImage }} style={styles.profileImage} />
//               ) : (
//                 <Ionicons name="person-circle" size={24} color="black" />
//               )}
//             </TouchableOpacity>
//           </View>
//         );
//         case 'buttons':
//           return (
//             <View style={styles.buttonRow}>
//               <TouchableOpacity style={styles.button} onPress={() => updateChartData('all')}>
//                 <Text style={styles.buttonText}>All</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.button} onPress={() => updateChartData('week')}>
//                 <Text style={styles.buttonText}>Last Week</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.button} onPress={() => updateChartData('month')}>
//                 <Text style={styles.buttonText}>Last Month</Text>
//               </TouchableOpacity>
//               <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
//             </View>
//           );
//       case 'metrics':
//         return (
//           <View style={styles.metricsContainer}>
//             <View style={[styles.metric, styles.border]}>
//               <Text style={styles.metricTitle}>Sales ({timeFrame})</Text>
//               <Text style={styles.metricValue}>KSh {totalSales.toLocaleString()}</Text>
//               <Text style={styles.metricChange}>+20% {timeFrame.toLowerCase()} over {timeFrame.toLowerCase()}</Text>
//             </View>
//             {/* ... other metrics */}
//           </View>
//         );
//       case 'chart':
//         return (
//           <View style={styles.border}>
//             <Text style={styles.chartTitle}>Statistics</Text>
//             <View style={styles.chartButtons}>
//               <TouchableOpacity style={styles.chartButton} onPress={() => updateChartData(1)}>
//                 <Text>Today</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.chartButton} onPress={() => updateChartData(12)}>
//                 <Text>1 Year</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.chartButton} onPress={() => updateChartData(24)}>
//                 <Text>2 Years</Text>
//               </TouchableOpacity>
//             </View>
//             {chartData && (
//               <LineChart
//                 data={chartData}
//                 width={screenWidth - 40}
//                 height={screenWidth * 0.5}
//                 chartConfig={chartConfig}
//                 style={styles.chart}
//                 bezier
//                 fromZero
//                 withInnerLines={false}
//                 yAxisInterval={5}
//                 verticalLabelRotation={-45}
//                 xLabelsOffset={-10}
//                 yAxisSuffix="KSH"
//               />
//             )}
//           </View>
//         );
//       case 'orders':
//         return (
//           <View style={[styles.border, styles.ordersContainer]}>
//             <Text style={styles.ordersTitle}>Orders</Text>
//             <View style={styles.ordersSummary}>
//               <Text style={styles.ordersSummaryText}>Total Orders: {totalOrders}</Text>
//               <Text style={styles.ordersSummaryText}>Total Value: KSh {totalOrderValue.toLocaleString()}</Text>
//             </View>
//             <FlatList
//               data={orders}
//               keyExtractor={(item, index) => `order-${item.id}-${index}`}
//               renderItem={({ item }) => (
//                 <OrderItem
//                   customer={item.customer}
//                   email={item.email}
//                   date={item.date}
//                   status={item.status}
//                   profileImage={item.profileImage}
//                   amount={item.amount}
//                 />
//               )}
//             />
//           </View>
//         );
//       default:
//         return null;
//     }
//   };

//   const sections = [
//     { type: 'header', id: 'header' },
//     { type: 'buttons', id: 'buttons' },
//     { type: 'metrics', id: 'metrics' },
//     { type: 'chart', id: 'chart' },
//     { type: 'orders', id: 'orders' },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={sections}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
        
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({



//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   profileImage: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   searchIcon: {
//     marginLeft: 10,
//   },
//   metricsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   metric: {
//     alignItems: 'center',
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   metricTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   metricValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   metricChange: {
//     fontSize: 14,
//     color: 'green',
//   },
//   chartTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   chart: {
//     marginVertical: 10,
//   },
//   chartButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10,
//   },
//   chartButton: {
//     padding: 8,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginTop: 20,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   ordersContainer: {
//     marginTop: 20,
//   },
//   ordersTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   orderItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     padding: 10,
//   },
//   orderProfileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 15,
//   },
//   orderInfo: {
//     flex: 1,
//   },
//   orderText: {
//     fontSize: 16,
//   },
//   orderCustomer: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   orderEmail: {
//     fontSize: 14,
//     color: '#666',
//   },
//   orderDate: {
//     fontSize: 14,
//     color: '#888',
//   },
//   orderStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   orderStatusText: {
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: 'bold',
// },
// ordersSummary: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   marginBottom: 10,
// },
// ordersSummaryText: {
//   fontSize: 16,
//   fontWeight: 'bold',
// },
// orderAmount: {
//   fontSize: 14,
//   fontWeight: 'bold',
//   color: 'green',
// },

// statusContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
// },
// statusText: {
//   marginRight: 8,
// },
// });

// export default SalesDashboard;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})