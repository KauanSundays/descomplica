import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = {
  background: '#FFF8F6',
  border: '#F3DDE1',
  muted: '#8C777E',
  pink: '#C5235D',
  text: '#30232A',
  white: '#FFFFFF',
};

const shortcuts = ['Boletos', 'Biblioteca', 'Carteirinha', 'Secretaria'];
const notices = [
  { title: '[Título do aviso]', detail: 'Há 2 horas · Coordenação' },
  { title: '[Título do aviso]', detail: 'Ontem · Secretaria' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Bom dia,</Text>
              <Text style={styles.studentName}>[Nome do aluno]</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>FL</Text>
            </View>
          </View>

          <View style={styles.classCard}>
            <Text style={styles.nextClass}>Próxima aula · hoje, 19:10</Text>
            <Text style={styles.className}>Cálculo I</Text>
            <Text style={styles.classDetails}>Sala 204 · Bloco B · Prof. [Nome]</Text>
          </View>

          <View style={styles.shortcutGrid}>
            {shortcuts.map((shortcut) => (
              <View key={shortcut} style={styles.shortcut}>
                <Text style={styles.shortcutText}>{shortcut}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Avisos</Text>
          <View style={styles.notices}>
            {notices.map((notice) => (
              <View key={notice.detail} style={styles.notice}>
                <Text style={styles.noticeTitle}>{notice.title}</Text>
                <Text style={styles.noticeDetail}>{notice.detail}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  content: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greeting: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  studentName: {
    color: colors.text,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '700',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FCE4EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.pink,
    fontSize: 16,
    fontWeight: '700',
  },
  classCard: {
    minHeight: 116,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.pink,
  },
  nextClass: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  className: {
    color: colors.white,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: '700',
  },
  classDetails: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
  },
  shortcutGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    marginBottom: 20,
  },
  shortcut: {
    width: '48.2%',
    minHeight: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  shortcutText: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 18,
  },
  notices: {
    gap: 20,
  },
  notice: {
    minHeight: 65,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  noticeTitle: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 19,
    fontWeight: '600',
  },
  noticeDetail: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 17,
  },
});
