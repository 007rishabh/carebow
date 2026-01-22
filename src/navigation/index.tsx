/**
 * Root Navigator
 * Main navigation container with all screens
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { RootStackParamList } from './types';

// Navigators
import ProfileStackNavigator from './ProfileStackNavigator';
import SafetyStackNavigator from './SafetyStackNavigator';
import TabNavigator from './TabNavigator';

// Screen imports
import Login from '@/screens/Login';
import Register from '@/screens/Register';
import AssessmentScreen from '../screens/AssessmentScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ConversationScreen from '../screens/ConversationScreen';
import EpisodeSummaryScreen from '../screens/EpisodeSummaryScreen';
import HealthMemoryScreen from '../screens/HealthMemoryScreen';
import ModalScreen from '../screens/ModalScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';
import OrdersScreen from '../screens/OrdersScreen';
import PlanDetailsScreen from '../screens/PlanDetailsScreen';
import RequestDetailsScreen from '../screens/RequestDetailsScreen';
import RequestsScreen from '../screens/RequestsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ServiceDetailsScreen from '../screens/ServiceDetailsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import Splash from '../screens/Splash';
import ThreadScreen from '../screens/ThreadScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen
        name="Conversation"
        component={ConversationScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Assessment"
        component={AssessmentScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Thread"
        component={ThreadScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetailsScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="PlanDetails"
        component={PlanDetailsScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
        options={{
          presentation: 'modal',
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetailsScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="RequestDetails"
        component={RequestDetailsScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Safety"
        component={SafetyStackNavigator}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          presentation: 'modal',
          title: 'Modal',
        }}
      />
      <Stack.Screen
        name="HealthMemory"
        component={HealthMemoryScreen}
        options={{
          animation: 'default',
        }}
      />
      <Stack.Screen
        name="EpisodeSummary"
        component={EpisodeSummaryScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
