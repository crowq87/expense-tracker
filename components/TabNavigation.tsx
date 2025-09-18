// import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import AddExpenseScreen from '..//AddExpenseScreen';
// import HomeScreen from '..//HomeScreen';
// import ProfileScreen from '/ProfileScreen';

// const Tab = createBottomTabNavigator();

// export default function TabNavigation() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Add Expense') {
//               iconName = focused ? 'add-circle' : 'add-circle-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#007AFF',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Add Expense" component={AddExpenseScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }