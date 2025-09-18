import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from '@/constants/Colors';

<<<<<<< HEAD
=======
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

<<<<<<< HEAD
=======

>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
<<<<<<< HEAD
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
=======
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
<<<<<<< HEAD

      <Tabs.Screen
        name="editExpense"
        options={{
          title: 'Edit Expense',
          tabBarIcon: ({ color }) => <TabBarIcon name="edit" color={color} />,
        }}
      />
      <Tabs.Screen
        name="addExpense"
        options={{
          title: 'Add Expense',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-circle" color={color} />,
        }}
      />

=======
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
      <Tabs.Screen
        name="two"
        options={{
          title: 'Profile',
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
=======
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
>>>>>>> 19fe5090487c500cfdcc5c9f24cc4aed9c280cb2
        }}
      />
    </Tabs>
  );
}
