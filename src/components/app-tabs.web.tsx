import {
  TabList,
  TabListProps,
  TabSlot,
  Tabs,
  TabTrigger,
  TabTriggerSlotProps,
} from 'expo-router/ui';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const colors = {
  accent: '#C5235D',
  border: '#F1E5E7',
  muted: '#775F67',
  white: '#FFFFFF',
};

const tabIcons = {
  home: { ios: 'house', android: 'home', web: 'home' },
  notes: { ios: 'doc.text', android: 'description', web: 'description' },
  schedule: { ios: 'calendar', android: 'calendar_month', web: 'calendar_month' },
  profile: { ios: 'person', android: 'person', web: 'person' },
} as const;

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={styles.tabSlot} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton icon={tabIcons.home}>Início</TabButton>
          </TabTrigger>
          <TabTrigger name="notas" href="/notas" asChild>
            <TabButton icon={tabIcons.notes}>Notas</TabButton>
          </TabTrigger>
          <TabTrigger name="horarios" href="/horarios" asChild>
            <TabButton icon={tabIcons.schedule}>Horários</TabButton>
          </TabTrigger>
          <TabTrigger name="perfil" href="/perfil" asChild>
            <TabButton icon={tabIcons.profile}>Perfil</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

type TabButtonProps = TabTriggerSlotProps & {
  icon: (typeof tabIcons)[keyof typeof tabIcons];
};

function TabButton({ children, icon, isFocused, ...props }: TabButtonProps) {
  const color = isFocused ? colors.accent : colors.muted;

  return (
    <Pressable
      {...props}
      accessibilityRole="tab"
      accessibilityState={{ selected: isFocused }}
      style={({ pressed }) => [styles.tabButton, pressed && styles.pressed]}>
      <SymbolView name={icon} tintColor={color} size={22} />
      <Text style={[styles.tabLabel, { color }]}>{children}</Text>
    </Pressable>
  );
}

function CustomTabList({ children, ...props }: TabListProps) {
  return (
    <View {...props} style={[styles.tabBar, props.style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  tabSlot: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 77,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 8,
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  tabButton: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  tabLabel: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
});
