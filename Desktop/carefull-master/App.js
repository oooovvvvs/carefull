// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashTitle}>Carefull</Text>
    </View>
  );
};

const HomeScreen = ({ navigateTo }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>carefull</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => navigateTo('Calendar')}>
          <Image style={styles.icon} source={require('./assets/Calendar.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Settings')}>
          <Image style={styles.icon} source={require('./assets/Alarm.png')} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ marginBottom: 10 }}>
      <ImageBackground source={require('./assets/pill_drop.jpg')} style={styles.backgroundImage}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', padding: '1%' }}>금일 투약 횟수</Text>
        <Text style={styles.daystext}>아침</Text>
        <Text style={styles.daystext}>점심</Text>
        <Text style={styles.daystext}>어제</Text>
      </ImageBackground>
    </View>
    <View style={styles.medicationReminder}>
      <Text style={styles.sectionTitle}>투약 알림</Text>
      <View style={styles.reminderItem}>
        <Image style={styles.reminderIcon} source={require('./assets/pill_00.png')} />
        <View>
          <Text style={styles.reminderText}></Text>
          <Text style={styles.reminderTime}></Text>
        </View>
      </View>
    </View>
    <View style={styles.medicationReminder}>
      <Text style={styles.sectionTitle}>약 잔여량</Text>
      <View style={styles.reminderItem}>
        <Image style={styles.reminderIcon} source={require('./assets/pill_00.png')} />
        <View>
          <Text style={styles.reminderText}></Text>
          <Text style={styles.reminderTime}></Text>
        </View>
      </View>
    </View>
    <ScrollView horizontal style={styles.medicationList}>
      <TouchableOpacity onPress={() => navigateTo('Medication1')}>
        <View style={styles.medicationItem}>
          <Image style={styles.medicationImage} source={require('./assets/pill_00.png')} />
          <Text style={styles.medicationDescription}>아스피린장용정{'\n'}복용한지 지난지 2시간이 지났습니다</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Medication2')}>
        <View style={styles.medicationItem}>
          <Image style={styles.medicationImage} source={require('./assets/pill_00.png')} />
          <Text style={styles.medicationDescription}>투통약{'\n'}복용한지 24시간이 지났습니다</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Medication3')}>
        <View style={styles.medicationItem}>
          <Image style={styles.medicationImage} source={require('./assets/pill_00.png')} />
          <Text style={styles.medicationDescription}>비타민A{'\n'}복용한지 1일이 지났습니다</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigateTo('Home')}>
        <Image style={styles.bottomIcon} source={require('./assets/pill_00.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Home')}>
        <Image style={styles.bottomIcon} source={require('./assets/Home_Menu.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('UserInfo')}>
        <Image style={styles.bottomIcon} source={require('./assets/Account.png')} />
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const CalendarScreen = ({ navigateTo }) => (
  <View style={styles.header}>
    <Text>Calendar Screen</Text>
    <TouchableOpacity onPress={() => navigateTo('Home')}>
      <Text>Go Back</Text>
    </TouchableOpacity>
  </View>
);

const SettingsScreen = ({ navigateTo }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigateTo('Home')}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: "black" }}>← 알림</Text>
    </TouchableOpacity>
  </View>
);

const UserInfo = ({ navigateTo }) => (
  <>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigateTo('Home')}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: "black" }}>← 사용자 정보</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: "black", marginBottom: 15 }}>내 정보 관리</Text>
      <Text style={{ fontSize: 15, color: "black", marginBottom: 15 }}>개인 정보 관리</Text>
      <Text style={{ fontSize: 15, color: "black", marginBottom: 15 }}>비밀번호 변경</Text>
      <Text style={{ fontSize: 15, color: "black", marginBottom: 15 }}>사용자 코드</Text>
      <Text style={{ fontSize: 15, color: "black", marginBottom: 25 }}>보호자 등록</Text>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: "black", marginBottom: 15 }}>내 정보 관리</Text>
      <Text style={{ fontSize: 15, color: "black", marginBottom: 15 }}>내 약통 관리dz</Text>
    </View>
  </>
);

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Splash');
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
      setCurrentScreen('Home');
    }, 1000); // 1초 후에 Splash 화면 숨김

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  const renderScreen = () => {
    if (isSplashVisible) {
      return <SplashScreen />;
    }
    switch (currentScreen) {
      case 'Calendar':
        return <CalendarScreen navigateTo={setCurrentScreen} />;
      case 'Settings':
        return <SettingsScreen navigateTo={setCurrentScreen} />;
      case 'UserInfo':
        return <UserInfo navigateTo={setCurrentScreen} />;
      case 'Home':
      default:
        return <HomeScreen navigateTo={setCurrentScreen} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color:'black',
    textalign: 'center'
  },
  backgroundImage: {
    flex: 2,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  daystext: {
    fontSize: 18,
    fontWeight:'bold', 
    padding:"1%",
    marginLeft: 5,
    color: '#000000'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'black'
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  banner: {
    width: '100%',
    height: 150,
  },
  medicationReminder: {
    marginTop: 10,
    marginBottom:10,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reminderIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reminderTime: {
    fontSize: 14,
    color: '#666',
  },
  medicationList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  medicationItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  medicationImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  medicationDescription: {
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#a5d6a7',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  }
  
});

export default App;
