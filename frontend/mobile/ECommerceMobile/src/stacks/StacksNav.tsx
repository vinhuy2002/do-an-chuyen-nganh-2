import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeIndex from '../pages/home/HomeIndex';
import ItemDetail from '../pages/home/ItemDetail';
import MyTabs from '../common/BottomNav';
import CategoryItem from '../pages/category/CategoryItem';
import LoginIndex from '../pages/login/LoginIndex';
import RegisterIndex from '../pages/register/RegisterIndex';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import AddInformation from '../pages/setting/AddInformation';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    const checkLogin = useAppSelector((state) => state.login.login);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            {checkLogin == false ?
                <>
                    <Stack.Screen name='Home' component={MyTabs} />
                    <Stack.Screen name='ItemDetail' component={ItemDetail} />
                    <Stack.Screen name='CategoryItem' component={CategoryItem} />
                    <Stack.Screen name='Login' component={LoginIndex} />
                    <Stack.Screen name='Register' component={RegisterIndex} />
                </>
            : 
                <>
                    <Stack.Screen name='Home' component={MyTabs} />
                    <Stack.Screen name='ItemDetail' component={ItemDetail} />
                    <Stack.Screen name='CategoryItem' component={CategoryItem} />
                    <Stack.Screen name='AddInfo' component={AddInformation} />
                    <Stack.Screen name='Login' component={LoginIndex} />
                    <Stack.Screen name='Register' component={RegisterIndex} />
                </>
            }

        </Stack.Navigator>
    )
}
export default StackNav;