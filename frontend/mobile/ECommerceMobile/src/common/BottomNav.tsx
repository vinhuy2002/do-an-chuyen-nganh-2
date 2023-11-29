import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartIndex from '../pages/cart/CartIndex';
import HomeIndex from '../pages/home/HomeIndex';
import SearchIndex from '../pages/search/SearchIndex';
import SettingIndex from '../pages/setting/SettingIndex';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={
            {
                tabBarStyle: { height: 60 },
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12
                },
                tabBarHideOnKeyboard: true
            }
        }>
            <Tab.Screen name= 'Home' component={HomeIndex} options={{
                tabBarLabel: 'Trang chủ',
                tabBarIcon: () => (
                    <Icon name="home" size={30} />
                ),
            }} />
            <Tab.Screen name="Search" component={SearchIndex} options={{
                tabBarLabel: 'Tìm kiếm',
                tabBarIcon: () => (
                    <Icon name="magnify" size={30}/>
                ),
            }} />
            <Tab.Screen name="Cart" component={CartIndex} options={{
                tabBarLabel: 'Giỏ hàng',
                tabBarIcon: () => (
                    <Icon name="cart" size={30}/>
                ),
            }} />
            <Tab.Screen name="Setting" component={SettingIndex} options={{
                tabBarLabel: 'Cài đặt',
                tabBarIcon: () => (
                    <Icon name="cog" size={30}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default MyTabs;