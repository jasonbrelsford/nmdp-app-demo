import { Tabs } from 'expo-router';
import { Home, User, GraduationCap, Percent } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color, size }) => <GraduationCap size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="match-probability"
        options={{
          title: 'Match',
          tabBarIcon: ({ color, size }) => <Percent size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />
        }}
      />
    </Tabs>
  );
}