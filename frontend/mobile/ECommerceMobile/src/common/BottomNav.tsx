import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartIndex from '../pages/cart/CartIndex';
import HomeIndex from '../pages/home/HomeIndex';
import SearchIndex from '../pages/search/SearchIndex';
import SettingIndex from '../pages/setting/SettingIndex';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={
            {
                tabBarStyle: { height: 60 },
                tabBarLabelStyle: {
                    fontSize: 12,
                    // color: "black"
                },
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: "#0077b6",
            }
        }>
            <Tab.Screen name= 'HomeIndex' component={HomeIndex} options={{
                title: "Khám phá",
                headerStyle: {
                    backgroundColor: '#0077b6',
                },
                headerTintColor: '#fff',
                tabBarLabel: 'Trang chủ',
                tabBarIcon: ({focused, color}) => (
                    <Icon name="home-outline" size={30} color={focused ? "#0077b6": "#7F7F7F"}/>
                ),
                
            }} />
            <Tab.Screen name="Search" component={SearchIndex} options={{
                title: "Tìm kiếm",
                headerStyle: {
                    backgroundColor: '#0077b6',
                },
                headerTintColor: '#fff',
                tabBarLabel: 'Tìm kiếm',
                tabBarIcon: ({focused, color}) => (
                    <Icon name="search-outline" size={30} color={focused ? "#0077b6": "#7F7F7F"}/>
                ),
            }} />
            <Tab.Screen name="Cart" component={CartIndex} options={{
                title: "Giỏ hàng",
                headerStyle: {
                    backgroundColor: '#0077b6',
                },
                headerTintColor: '#fff',
                tabBarLabel: 'Giỏ hàng',
                tabBarIcon: ({focused, color}) => (
                    <Icon name="cart-outline" size={30} color={focused ? "#0077b6": "#7F7F7F"}/>
                ),
            }} />
            <Tab.Screen name="Setting" component={SettingIndex} options={{
                title: "Cài đặt",
                headerStyle: {
                    backgroundColor: '#0077b6',
                },
                headerTintColor: '#fff',
                tabBarLabel: 'Cài đặt',
                tabBarIcon: ({focused, color}) => (
                    <Icon name="settings-outline" size={30} color={focused ? "#0077b6": "#7F7F7F"}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default MyTabs;